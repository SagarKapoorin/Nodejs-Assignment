import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { postItems } from "./controllers/Item.js";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import categoryRoutes from "./routes/Category.js";
import itemsRoutes from "./routes/Item.js";
import subcategoryRoutes from './routes/Subcategory.js'
import { postSubCategory } from "./controllers/SubCategory.js";
import { postCategory } from "./controllers/Category.js";
import Category from "./models/Category.js";
import SubCategory from "./models/SubCategory.js";
import Items from "./models/Item.js";
import { items } from "./data/index.js";
import { subcategory } from "./data/index.js";
import { category } from "./data/index.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/subcategory/:categoryName",upload.single("picture"),postSubCategory);
app.post("/category",upload.single("picture"),postCategory);
app.post("/items/:categoryName/:subcategoryName",upload.single("picture"),postItems);

/* ROUTES */
app.use("/items", itemsRoutes);
app.use("/category", categoryRoutes);
app.use("/subcategory", subcategoryRoutes);
// console.log(process.env.PORT+" "+process.env.MONGO_URL);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // Category.insertMany(category);
    // SubCategory.insertMany(subcategory);
    // console.log(items);
    // Items.insertMany(items);
  
  })
  .catch((error) => console.log(`${error} did not connect`));