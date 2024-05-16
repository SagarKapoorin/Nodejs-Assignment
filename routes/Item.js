import { getNameItems } from "../controllers/Item.js";
import express from 'express';
import { getItems } from "../controllers/Item.js";
const router=express.Router();
router.get("/",getItems);
router.get("/:identifier",getNameItems);
// router.patch("/",patchItems);

export default router;