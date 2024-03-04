
const submitButton = document.querySelector('button[type="submit"]')
const h2 = document.querySelector("h2")

// submitButton.addEventListener("click",(e) => {
// e.preventDefault()

// let name = document.querySelector('input[type="text"]').value
// let email = document.querySelector('input[type="email"]').value

// // h2.innerText = name + " " + email

// fetch("http://localhost:8000/", {
// method:"POST",
// headers:{"Content-Type": "application/json"},
// body: JSON.stringify({ name, email })

// })
// .then(res => res.text())
// .then(data => h2.innerText = data)
// .catch(error => console.log(error))
// name=""
// email = ""
// })


const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('http://localhost:5500/users', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the response from the server
        // Do something with the response if needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
