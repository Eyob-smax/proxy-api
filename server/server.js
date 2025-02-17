import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
