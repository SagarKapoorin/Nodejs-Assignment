import { getNameSubCategory } from "../controllers/SubCategory.js";
import express from 'express';
import { patchSubCategory } from "../controllers/SubCategory.js";
import { getSubCategoryItems } from "../controllers/SubCategory.js";
import { getSubCategory } from "../controllers/SubCategory.js";
const router=express.Router();
router.get("/",getSubCategory);
router.get("/:identifier",getNameSubCategory);  //pass name of subcategory
router.get("/items/:identifier", getSubCategoryItems); // pass name of subcategory
router.patch("/:id",patchSubCategory);   //pass id;

export default router;