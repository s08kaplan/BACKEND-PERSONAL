// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, (error, db) => {
//   if (error) {
//     console.log("error caught", error);
//     return
//   }
//   console.log("Database created keep studying to learn MongoDB");
//   const dbo = db.db("mydb")
//   dbo.createCollection("customers", (error, res) => {
//     if(error){
//         console.log("error caught again", error);
//     }
//     console.log("Collection created");
//     db.close();
//   })
// });

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";

const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(url);
    console.log("Connected to MongoDB successfully!");
    return client.db("mydb");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = connectToDatabase;

