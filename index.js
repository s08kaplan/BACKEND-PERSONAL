const EventEmitter = require("node:events")

const emitter = new EventEmitter()

emitter.on("order-pizza", (size, ingredients) => {
    console.log(`Order received! Baking a ${size} pizza with ${ingredients} in 10 minutes`)
})

emitter.on("order-pizza", (size) => {
    if(size === "x-large") {
        console.log("drinks are free but only the person who ordered the pizza 😎");
    }
})

console.log("actually this message returns first");

emitter.emit("order-pizza", "x-large", "chicken")

console.log("this message returns last");