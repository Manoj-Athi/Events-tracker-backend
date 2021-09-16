import express from "express";
import mongoose  from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

app.use('/user', userRoutes)
app.get('/',(req, res) => {
    res.send("Welcome to Events tracker api developed by Manoj kumar");
})

const PORT = process.env.PORT || 5000;

mongoose.connect( process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`Server running on ${PORT}`)}))
    .catch((err) => console.log(err.message));