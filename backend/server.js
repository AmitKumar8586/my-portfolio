const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Home Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Test Route
app.get("/smartphone", (req, res) => {
  console.log("Received request for /smartphone");

  res.json({
    message: "This is smartphone data from the backend",
  });
});

// Connect MongoDB
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Model
const Contact = mongoose.model("Contact", contactSchema);

// Contact Route
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (err) {
    console.error("Error saving message", err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
