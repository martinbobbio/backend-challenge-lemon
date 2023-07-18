<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/martinbobbio/app-challenge-lemon/master/assets/images/lemon-logo.png" width="200">
  <br><br>
  <a href="https://backend-challenge-lemon.vercel.app/">
  Challenge Lemon - Backend
  </a>
  <br>
  <br>
</h1>
<h4 align="center">
  <a href="https://github.com/martinbobbio/app-challenge-lemon">Lemon - App</a>
</h4>
<br>

## Description

This project is a backend API developed using Node.js with TypeScript and Express. It utilizes Axios for making HTTP requests and Dotenv for managing environment variables. The API interacts with the Lemon API to retrieve item information based on search parameters.

## Getting started

1. Clone the repository:

```bash
git clone https://github.com/martinbobbio/backend-challenge-lemon
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
npm start
```

4. The API will be accessible at http://localhost:3000/api.

### Coin List + Search

- URL: `/api/coins`
- Method: `GET`
- Description: Getting currencies list information from the Coingecko API based on search parameters.
- Query Parameters:
- - `search` (Optional) This parameter is for a filter and searching in the API.
- - `ids` (Optional) This parameter is similar to the previous but only filter.
- Body:

```JSON
[
  {
  "ath": 1234.56,
  "ath_change_percentage": 12.34,
  "ath_date": "2022-01-01",
  "atl": 10.0,
  "atl_change_percentage": 50.0,
  "atl_date": "2022-01-01",
  "circulating_supply": 1000000,
  "current_price": 123.45,
  "fully_diluted_valuation": 9876543210,
  "high_24h": 130.0,
  "id": "bitcoin",
  "image": "https://example.com/bitcoin.png",
  "last_updated": "2022-01-01T12:34:56Z",
  "low_24h": 120.0,
  "market_cap": 1234567890,
  "market_cap_change_24h": 1234567,
  "market_cap_change_percentage_24h": 1.23,
  "market_cap_rank": 1,
  "max_supply": 21000000,
  "name": "Bitcoin",
  "price_change_24h": -5.67,
  "price_change_percentage_24h": -4.56,
  "roi": null,
  "symbol": "BTC",
  "total_supply": 21000000,
  "total_volume": 98765432
  },
  // ...
]
```

### Coin Detail

- URL: `/api/coins/:id`
- Method: `GET`
- Description: Getting item detail information from the Coingecko API based on the item ID.

- Body:

```JSON
{"id": "bitcoin",
  "symbol": "BTC",
  "name": "Bitcoin",
  "image": {
    "thumb": "https://example.com/bitcoin-thumb.png",
    "small": "https://example.com/bitcoin-small.png",
    "large": "https://example.com/bitcoin-large.png"
  },
  "description": {
    "en": "Description in English",
    "es": "Descripción en Español"
  },
  "market_data": {
    "ath": {
      "usd": 1234.56,
      "eur": 987.65
    },
    "atl": {
      "usd": 10.0,
      "eur": 7.89
    },
    "market_cap": {
      "usd": 1234567890,
      "eur": 987654321
    },
    "total_volume": {
      "usd": 98765432,
      "eur": 7654321
    },
    "current_price": {
      "usd": 123.45,
      "eur": 98.76
    },
    "price_change_percentage_24h": -4.56,
    "price_change_percentage_7d": -2.34,
    "price_change_percentage_30d": 1.23,
    "price_change_percentage_1y": 10.0,
    "market_cap_rank": 1
  }}
```

## Scripts

- `npm start`: Builds the TypeScript files and starts the server using `node`
- `npm start`: Starts the server in development mode using `nodemon`.
- `npm run build`: Builds the TypeScript files to the `dist` directory.
