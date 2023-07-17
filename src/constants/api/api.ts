import axios from "axios";

export const apiCoingecko = axios.create({
  baseURL: process.env.API_URL_COINGECKO || "https://api.coingecko.com/api/v3/",
});
