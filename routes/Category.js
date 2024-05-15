import { getNameCategory } from "../controllers/Category.js";
import Category from "../models/Category.js";
import express from 'express';
import { getCategory } from "../controllers/Category.js";
const router=express.Router();
router.get("/",getCategory);
router.get("/:identifier",getNameCategory);
// router.patch("/",patchCategory);

export default router;