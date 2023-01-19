import { Router } from "express";
import { methods as languageController } from "../controllers/langugage.controller";
const router = Router();

router.get("/", languageController.getLanguage );
router.post("/", languageController.addLanguage );


export default router;
