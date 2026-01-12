import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import chatRouter from "./routes/chat.js";
import authRoutes from "./routes/auth.js";



const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", chatRouter);

const connect_db = async () => {
   mongoose.connect(process.env.MONGO_URL)
     .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
}
// ✅ HOME ROUTE (important for Render)
app.get("/", (req, res) => {
  res.send("ShreeGPT Backend is running 🚀");
});

app.listen("/",(req,res)
app.listen(port, async () => {
    console.log(`Server is listening at the ${port}`);
    await connect_db();
});
