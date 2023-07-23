// Express
import { Request, Response } from "express";
// Constants
import { apiCoingecko } from "../../constants";
// Console colors
import chalk from "chalk";
// Axios
import { AxiosError } from "axios";

/**
 * Controller for retrieving coin list information from API of coingecko.
 *
 * @function getcoinList
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 * @returns {Promise<void>} Promise that resolves once the coin list information is retrieved.
 */
export const getCoinList = async (req: Request, res: Response) => {
  // Getting coins list
  try {
    const { ids, search } = req.query;
    const { data: coinsIds } = await apiCoingecko.get("/coins/list");
    const idsSearched = coinsIds
      ?.map((ids) => ids.id)
      ?.filter((id) => id.includes(search))
      ?.join(",");
    if (!idsSearched && search) {
      console.log(chalk.blueBright("/api/coins search not found"));
      res.status(200).json([]);
    } else {
      const { data: coinsList } = await apiCoingecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
          ids: idsSearched ? idsSearched : ids,
        },
      });
      console.log(
        chalk.blueBright("/api/coins getting information succesfully")
      );
      res.status(200).json(coinsList);
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    const statusCode = axiosError.response?.status || 500;
    console.error(chalk.redBright(`Error searching the item list ${error}`));
    res.status(statusCode).json({ error: "Error searching the item list" });
  }
};

/**
 * Controller for retrieving coin detail information from API of coingecko.
 *
 * @function getCoinDetail
 * @param {Request} req - Express Request object.
 * @param {Response} res - Express Response object.
 * @returns {Promise<void>} Promise that resolves once the coin detail information is retrieved.
 */
export const getCoinDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { data: coinsList } = await apiCoingecko.get(`/coins/${id}`, {
      params: {
        community_data: false,
        developer_data: false,
      },
    });

    console.log(
      chalk.blueBright(
        `/api/coins getting information detail of ${id} succesfully`
      )
    );
    res.status(200).json(coinsList);
  } catch (error) {
    const axiosError = error as AxiosError;
    const statusCode = axiosError.response?.status || 500;
    console.error(
      chalk.redBright(`Error searching the item detail ${id} - ${error}`)
    );
    res
      .status(statusCode)
      .json({ error: `Error searching the item detail ${id}` });
  }
};
