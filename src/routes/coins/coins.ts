// Express
import { Router } from "express";
// Controllers
import { getCoinDetail, getCoinList } from "../../controllers";

const router = Router();

router.get("/api/coins", getCoinList);
router.get("/api/coins/:id", getCoinDetail);

export default router;
