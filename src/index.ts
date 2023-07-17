// Express
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
// Environment vars
import dotenv from "dotenv";
// Console colors
import chalk from "chalk";
// Routes
import coinsRouter from "./routes/coins/coins";

// Init
dotenv.config();
console.log(JSON.stringify(process.env.API_URL_COINGECKO));
const app = express();
const port = process.env.PORT;

// CORS
app.use(function (_, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route by default
app.get("/", (_: Request, res: Response) => {
  res.status(200).json({ message: "The server is running", health: true });
});

// Route for items
app.use("/", coinsRouter);

// App listener
app.listen(port, () => {
  console.log(chalk.whiteBright("The server has started successfully."));
  console.log(chalk.greenBright(`Server running on http://localhost:${port}`));
});