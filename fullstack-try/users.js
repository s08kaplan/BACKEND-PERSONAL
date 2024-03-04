const users = document.querySelector(".users-info")


const URL = "http://127.0.0.1:8080/users"

fetch(URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    useData(data)})
  .catch(err => console.log(err))

  const useData = (info) => {
    
users.innerHTML =  info.data.map(data => {
    // const { name, username, email, phone, website, address: { city } } = data

 return   ` 
<h3>${data?.name}</h3>
<h3>${data?.username}</h3>
<h3>${data?.email}</h3>
<h3>${data?.city}</h3>
<h3>${data?.phone}</h3>
<h3>${data?.website}</h3>
`
})
  }