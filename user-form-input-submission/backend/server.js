import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 5000;
const FILE = "data.json";

app.use(cors());
app.use(express.json());

// Create file if not exists
if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, "[]");
}

// GET data
app.get("/get", (req, res) => {
  const data = fs.readFileSync(FILE);
  res.json(JSON.parse(data));
});

// POST data
app.post("/save", (req, res) => {
  const newData = req.body;
  const data = JSON.parse(fs.readFileSync(FILE));

  data.push(newData);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

  res.json({ message: "Saved successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});