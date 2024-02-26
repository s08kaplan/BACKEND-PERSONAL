"use strict" 
// ? Write a router that matches /abc or /acd path.
const regexRequired = /\/abc|\/acd/

const testEndpoints = [
    "/abc",
    "/acd",
    "/adc",
    "/cba"
]

testEndpoints.forEach(endpoint => regexRequired.test(endpoint) ? console.log("perfect match") : console.log("sorry not matching"))

// ================================================

// ? Write a router that matches /a(any single digit)/ followed by 2 times c or 3 times c or

const regexPattern = /\/a\d{1}c{2,3}\//;
const test2 = [
    "/a1cc/",   
    "/a2ccc/",  
    "/a3ccccc/",
    "/a4cc/",  
    "/a5ccc/", 
    "/a6cccc/",
    "/abc/",   
    "/ac/"     
]

test2.forEach(str => regexPattern.test(str) ? console.log("okay matches") : console.log("sorry not matching") )

// *********************************************
// ? Routes that must end with string "Hello" and can have any no. of any character before that .
const regex2 = /.*Hello$/

const test3 = [
    "This is a test. Hello",       
    "Another test!Hello",         
    "Goodbye, not Hello",          
    "Hello, World",                
    "Greetings, Hello World!"
]

test3.forEach(str => regex2.test(str) ? console.log("works") : console.log("sorry"))

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ? Matching routes must end with the string "Hello" and must not have any characters before that.

const regex3 = /^Hello$/;

const test4 = [
    "Hello",       
    " Hello",      
    "Hello World", 
    "Hi Hello",    
    "Hello!"
]

test4.forEach(str => regex3.test(str) ? console.log("no problem working well") : console.log("NOOOOOO"))