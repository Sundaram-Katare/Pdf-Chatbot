import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import uploadRoute from "./routes/upload.route";
import chatRoute from "./routes/chat.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoute);
app.use("/chat", chatRoute);

app.listen(5000, () => {
  console.log("Server running");
});