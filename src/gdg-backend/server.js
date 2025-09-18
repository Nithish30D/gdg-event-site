const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const app = express();
const PORT = 3001;

// 🔐 Load Firebase service account
try {
  const serviceAccount = require("./serviceAccountKey.json");

  //dmin.initializeApp({
  //credential: admin.credential.cert(serviceAccount)
  //);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id // 👈 Add this line
  });


  console.log("✅ Firebase Admin initialized");
} catch (err) {
  console.error("❌ Failed to load serviceAccountKey.json:", err);
  process.exit(1); // Stop server if Firebase setup fails
}

const db = admin.firestore();

app.use(cors());
app.use(express.json());

// 📝 Registration endpoint
app.post("/register", async (req, res) => {
  try {
    const data = req.body;

    // Optional: Validate required fields
    if (!data.firstName || !data.email || !data.event) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const docRef = await db.collection("registrations").add({
      ...data,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log("✅ Registration saved:", docRef.id);
    res.status(200).json({ message: "Registration successful", id: docRef.id });
  } catch (err) {
    console.error("❌ Error saving registration:", err);
    res.status(500).json({ error: "Registration failed" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



/*const express = require("express");
const { db } = require("./firebaseAdmin");
const app = express();
const cors = require("cors");
app.use(cors());


app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    await db.collection("registrations").add(req.body);
    res.status(200).send("Registration saved");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error saving data");
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));*/
