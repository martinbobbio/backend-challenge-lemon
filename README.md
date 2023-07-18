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

### Item List

- URL: `/api/coins`
- Method: `GET`
- Description: Getting currencies list information from the Coingecko API based on search parameters.
- Query Parameters:
- - `search` (Optional) This parameter is for a filter and searching in the API.
- - `ids` (Optional) This parameter is similar to the previous but only filter.
- Body:

```JSON
{

}
```

### Item Detail

- URL: `/api/coins/:id`
- Method: `GET`
- Description: Getting item detail information from the Coingecko API based on the item ID.

- Body:

```JSON
{

}
```

## Scripts

- `npm start`: Builds the TypeScript files and starts the server using `node`
- `npm start`: Starts the server in development mode using `nodemon`.
- `npm run build`: Builds the TypeScript files to the `dist` directory.
