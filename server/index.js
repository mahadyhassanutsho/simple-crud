const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const mongodb_uri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

const client = new MongoClient(mongodb_uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();
    // await client.db("admin").command({ ping: 1 });
    // console.log("[server]: successfully pinged mongodb!");

    const userDB = client.db("userDB");
    const userCollection = userDB.collection("users");

    app.post("/users", async (req, res) => {
      const user = req.body;
      const insertedUser = await userCollection.insertOne(user);
      res
        .status(201)
        .json({ message: "user created successfully", user: insertedUser });
    });

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const users = await cursor.toArray();
      res.json(users);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const deletedUser = await userCollection.deleteOne(query);
      res.json({ message: "user deleted successfully", user: deletedUser });
    });
  } finally {
    // await client.close();
  }
};

app.get("/", (req, res) => {
  res.json({ message: "hello world from simple-crud" });
});

app.listen(port, () =>
  console.log(`[server] running on: http://localhost:${port}`)
);

run().catch(console.dir);
