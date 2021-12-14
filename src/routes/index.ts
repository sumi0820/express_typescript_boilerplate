import { Router } from "express";
import { postTodo } from "../controllers";

const router = Router();

router.post("/add", postTodo);
// router.get('/pushes', getPushes);

export default router;
