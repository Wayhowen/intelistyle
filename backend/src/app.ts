const { MongoClient } = require('mongodb');
const express = require("express");
const cors = require('cors');

// MongoDB setup
const url = 'mongodb://root:prisma@localhost:27017';
const client = new MongoClient(url);
MongoClient.connect(url);
const db = client.db("mydb")

const app = express();
app.use(cors);

app.get("/", async (req: any, res: any) => {
    const collection = await db.collection("garments");
    const results = await collection.find({}).limit(50).toArray();
    res.send(results);
});

app.get("/brands", async (req: any, res: any) => {
    const collection = await db.collection("garments");
    const brands = await collection.distinct('brand');
    res.status(204).json(brands);
});

const PORT = process.env.PORT || 8081;

app.listen(PORT);