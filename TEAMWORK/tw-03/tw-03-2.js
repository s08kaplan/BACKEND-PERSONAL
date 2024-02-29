// import { title } from "./get-elements"
const title = document.querySelector(".message").querySelector("h2")
const titleMessage = document.createTextNode("hi")
title.appendChild(titleMessage)
console.log(title);

const ol = document.querySelector(".regex-info") 
const liList = ol.querySelectorAll("li")
liList.forEach(li => {
    li.addEventListener("click",e=> {
    console.log(e.target.innerText)
})
})
const message = "Welcome to the Team-Work-03";
const message2 = " we will try to review regex in JS";
const message3 = " this must be at the end";
const message4 = "this message must be third message on the console";

// Function to log a message after a delay
const logMessage = (msg, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, delay);
    });
};

// Promise chaining to log messages in order
logMessage(message, 0)
    .then(() => logMessage(message2, 1500))
    .then(() => logMessage(message4, 1500))
    .then(() => logMessage(message3, 1500))
    .catch(error => {
        console.log(error);
    });
