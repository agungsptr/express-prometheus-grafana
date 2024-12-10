import { Router } from "express";
import { hello } from "./handlers";

const router = Router();
const basePath = "/v1";

router.get(`${basePath}/hello`, hello);

export default router;
