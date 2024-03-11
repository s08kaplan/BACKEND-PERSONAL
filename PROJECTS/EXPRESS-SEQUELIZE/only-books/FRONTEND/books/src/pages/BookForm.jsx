import { useEffect, useState } from "react";
import { formFields } from "../helper/formInfo";
import { serverFunction } from "../helper/serverFunction";
import Books from "./Books";

const BookForm = () => {
  const initialValues = {
    bookName: "",
    author: "",
    ISBN: "",
    genres: "",
    coverImage: "",
  };
  const [inputs, setInputs] = useState(initialValues);
  const [serverData, setServerData] = useState("")

  // const handleChange = (e) => {
  //   setInputs({ ...inputs, [e.target.name]: e.target.value });
  //   console.log(e.target.name, e.target.value);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setInputs(inputs);
    // console.log(inputs);
    // setInputs(initialValues);
  };
  // useEffect(() => {
  //   const formData = JSON.stringify(inputs);
  //   const dataFromServer = serverFunction("books",formData);
  //   setServerData(dataFromServer)
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = JSON.stringify(inputs);
        const dataFromServer = await serverFunction("books", formData);
        setServerData(dataFromServer);
      } catch (error) {
        console.error("Error fetching data from server:", error);
        
      }
    };

    fetchData(); 
  }, []); 

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.id}>
            <div className="label">
              <label htmlFor={field.id}> {field.label} </label>
            </div>
            <div className="form-inputs">
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                value={inputs[field.name]}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}
        <button type="submit">Save</button>   
      </form>
      { serverData && <Books data={serverData} />}
    </section>
  );
};

export default BookForm;


