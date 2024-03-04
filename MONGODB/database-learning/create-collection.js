const connectToDatabase = require("./my-db");

const createCollection = async () => {
  try {
    const db = await connectToDatabase();
    await db.createCollection("customers");
    console.log("Collection created");
  } catch (error) {
    console.error("Error creating collection:", error);
    throw error;
  }
};

module.exports = createCollection;
