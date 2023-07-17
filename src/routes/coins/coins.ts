// Express
import { Request, Response, Router } from "express";
// Constants
import { apiCoingecko } from "../../constants";
// Utils
import { getTopNRepeatedStrings } from "../../utils";
// Console colors
import chalk from "chalk";

const router = Router();

/**
 * Route handler for retrieving coin list information from API of Coingecko.
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 * @returns {Promise<void>} Promise that resolves once the coin list information is retrieved.
 */
router.get("/api/coins", async (req: Request, res: Response) => {
  // Getting coins list
  try {
    const { data: coinsList } = await apiCoingecko.get("/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        ids: "bitcoin",
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    });

    console.log(chalk.blueBright("/api/coins getting information succesfully"));
    res.status(200).json(coinsList);
  } catch (error) {
    console.error(chalk.redBright(`Error searching the item list ${error}`));
    res.status(500).json({ error: "Error searching the item list" });
  }
});

/**
 * Route handler for retrieving coin detail information from API of Lemon.
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 * @returns {Promise<void>} Promise that resolves once the coin detail information is retrieved.
 */
router.get("/api/coins/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
});

export default router;
