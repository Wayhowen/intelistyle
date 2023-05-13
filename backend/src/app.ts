const { MongoClient } = require('mongodb');
const express = require("express");

// MongoDB setup
const url = 'mongodb://root:prisma@localhost:27017';
const client = new MongoClient(url);
MongoClient.connect(url);
const db = client.db("mydb")

const app = express();

// async function run() {
//     try {
//         // const movies = client.collection('movies');
//         // // Query for a movie that has the title 'Back to the Future'
//         // const query = { title: 'Back to the Future' };
//         // const movie = await movies.findOne(query);
//         console.log(movie);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

app.get("/", async (req: any, res: any) => {
    const collection = await db.collection("garments");
    const results = await collection.find({}).limit(50).toArray();
    res.send(results);
});
const PORT = process.env.PORT || 8080;

app.listen(PORT);