import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.PORT || 5000;
const PANTRY_API = process.env.PANTRY_API;

const PANTRY_BASE_URL = `https://getpantry.cloud/apiv1/pantry/${PANTRY_API}/basket/`;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/:basketName", async (req, res) => {
  const { basketName } = req.params;
  try {
    const response = await axios.get(`${PANTRY_BASE_URL}/${basketName}`);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/:basketName", async (req, res) => {
  const { basketName } = req.params;
  const data = req.body;
  try {
    const response = await axios.post(`${PANTRY_BASE_URL}/${basketName}`, data);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/:basketName", async (req, res) => {
  const { basketName } = req.params;
  const data = req.body;
  try {
    const response = await axios.put(`${PANTRY_BASE_URL}/${basketName}`, data);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/:basketName", async (req, res) => {
  const { basketName } = req.params;
  try {
    await axios.delete(`${PANTRY_BASE_URL}/${basketName}`);
    res.status(200).json({ message: "Basket deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
