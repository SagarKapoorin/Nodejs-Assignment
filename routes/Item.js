import { getNameItems } from "../controllers/Item.js";
import express from 'express';
import { searchItems } from "../controllers/Item.js";
import { patchItems } from "../controllers/Item.js";
import { getItems } from "../controllers/Item.js";
const router=express.Router();
router.get("/search",searchItems);   // search?name=Car
router.get("/",getItems);
router.get("/:identifier",getNameItems); //pass id;
router.patch("/:id",patchItems);   //pass id;

export default router;