const username = document.querySelector("input[type='text']");
const email = document.querySelector("input[type='email']");
const form = document.querySelector("form");
const message = document.querySelector("p");
const userData = document.querySelector(".user-info")
const li = document.querySelector("li")


form.addEventListener("submit", (e) => {
  e.preventDefault();
  // message.innerText = username.value + " " + email.value;
  const body = JSON.stringify({ username: username.value, email: email.value });
  const URL = "http://127.0.0.1:8080"

  fetch(URL,{
    method:"POST",
     headers: {
      "Content-Type": "application/json"
    },
    body
  })
  .then(res => res.json())
  .then(data => {
    console.log("Response data:", data);
    showData(data);
  })
.catch(error => console.log(error))
  username.value=""
  email.value=""

});

const showData = (data) => {
message.innerText = data.message
// userData.innerText = data.userInfo.email
const { name , username, email, address: { city }, phone, website} = data.userInfo
userData.innerHTML= `
<h3>${name}</h3>
<h5>${username}</h5>
<h5>${email}</h5>
<h5>${phone}</h5>
<h5>${website}</h5>
<h5>${city}</h5>
`
}

li.addEventListener("click", () => {
  window.location.pathname = "/users.html"
})

