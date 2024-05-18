import { getNameSubCategory } from "../controllers/SubCategory.js";
import express from 'express';
import { patchSubCategory } from "../controllers/SubCategory.js";
import { getSubCategoryItems } from "../controllers/SubCategory.js";
import { getSubCategory } from "../controllers/SubCategory.js";
const router=express.Router();
router.get("/",getSubCategory);
router.get("/:identifier",getNameSubCategory);
router.get("/items/:identifier", getSubCategoryItems);
router.patch("/:id",patchSubCategory);

export default router;