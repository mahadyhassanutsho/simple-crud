const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const mongodb_uri = process.env.MONGODB_URI;

const mongodb_client = new MongoClient(mongodb_uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await mongodb_client.connect();
    await mongodb_client.db("admin").command({ ping: 1 });
    console.log("[server]: successfully pinged mongodb!");
  } finally {
    await mongodb_client.close();
  }
};

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "hello world from simple-crud" });
});

app.listen(port, () =>
  console.log(`[server] running on: http://localhost:${port}`)
);

run().catch(console.dir);
