import { getCategoryItems, getNameCategory } from "../controllers/Category.js";
import { getCategorysubcategory } from "../controllers/Category.js";
import { patchCategory } from "../controllers/Category.js";
import express from 'express';
import { getCategory } from "../controllers/Category.js";
const router=express.Router();
router.get("/",getCategory);
router.get("/:identifier",getNameCategory); //pass id 
router.get("/subcategory/:identifier", getCategorysubcategory); // pass category name
router.get("/items/:categoryId",getCategoryItems);  // pass category name;
router.patch("/:id",patchCategory);    // pass category id

export default router;