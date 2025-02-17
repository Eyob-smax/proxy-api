import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const PORT = process.env.PORT || 5000;
const PANTRY_API = process.env.PANTRY_API;
const TRIVIA_BASE_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=midium";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(TRIVIA_BASE_URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
