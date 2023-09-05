import { app } from "./app.js";
import { connectDB } from "./config/db.js";
import cloudinary from "cloudinary";

// connect database
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("<h1> Server is working </h1>");
});

const URL = process.env.URL;

// listen
if (process.env.NODE_ENV !== "PRODUCTION") {
  app.listen(process.env.PORT, () => {
    console.log(`Server is working on ${URL}:${process.env.PORT}`);
  });
} else {
  app.listen(process.env.PORT, () => {
    console.log(`Server is working on :${process.env.PORT}`);
  });
}
