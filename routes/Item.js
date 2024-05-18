import { getNameItems } from "../controllers/Item.js";
import express from 'express';
import { searchItems } from "../controllers/Item.js";
import { patchItems } from "../controllers/Item.js";
import { getItems } from "../controllers/Item.js";
const router=express.Router();
router.get("/search",searchItems);
router.get("/",getItems);
router.get("/:identifier",getNameItems);
router.patch("/:id",patchItems);

export default router;