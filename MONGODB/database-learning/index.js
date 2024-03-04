const createCollection = require("./create-collection.js");

createCollection()
  .then(() => {
    console.log("Database setup completed successfully");
  })
  .catch((error) => {
    console.error("Error setting up database:", error);
  });
