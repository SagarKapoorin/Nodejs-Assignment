import { getCategoryItems, getNameCategory } from "../controllers/Category.js";
import { getCategorysubcategory } from "../controllers/Category.js";
import { patchCategory } from "../controllers/Category.js";
import express from 'express';
import { getCategory } from "../controllers/Category.js";
const router=express.Router();
router.get("/",getCategory);
router.get("/:identifier",getNameCategory);
router.get("/subcategory/:identifier", getCategorysubcategory);
router.get("/items/:categoryId",getCategoryItems);
router.patch("/:id",patchCategory);

export default router;