import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import reviewRoutes from "./routes/review.route.js";
dotenv.config();
const app = express();
app.use(express.json());
const __dirname = path.resolve();
app.use("/api/reviews", reviewRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
}

app.listen(5000, () => {
  connectDB();
  console.log("the earth says hello");
});
