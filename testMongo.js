const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://alenciriko:Grumpex3230@cluster0.etllw.mongodb.net/vaja2?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  ssl: true,
  tlsAllowInvalidCertificates: true, // začasno
});

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB Atlas!");

    const db = client.db("vaja2");
    const users = await db.collection("users").find({}).toArray();
    console.log("Users:", users);
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    await client.close();
  }
}

run();
