export const serverFunction = async (url = "books", info) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const sendData = JSON.stringify(info)
  const res = await fetch(`${BASE_URL}/${url}`,{
    method:"POST",
    body:sendData
});
  const data = await res.json();
  return data
};
