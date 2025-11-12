import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRouter);

app.listen(port, () => {
  console.log(`✅ Serveur en ligne sur le port ${port}`);
});
