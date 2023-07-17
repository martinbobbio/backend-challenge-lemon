<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/martinbobbio/app-challenge-lemon/master/src/assets/images/..." width="200">
  <br>
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

3. Create a .env file in the root directory of the project and add the following environment variables:

```plaintext
PORT=<port-number>
```

Replace <port-number> with the desired port number for the server to run on (e.g., 3000).

4. Start the server

```bash
npm start
```

5. The API will be accessible at http://localhost:<port-number>/api.

### Item List

- URL: `/api/coins`
- Method: `GET`
- Description: Getting currencies list information from the Coingecko API based on search parameters.
- Query Parameters:
- - `?` (Required) ...
- - `?` (Optional) ...
- Body:

```JSON
{

}
```

### Item Detail

- URL: `/api/coins/:id`
- Method: `GET`
- Description: Getting item detail information from the Coingecko API based on the item ID.
- Query Parameters:
- - `?` (Required) ...
- - `?` (Optional) ...

- Body:

```JSON
{

}
```

## Scripts

- `npm start`: Builds the TypeScript files and starts the server using `node`
- `npm start`: Starts the server in development mode using `nodemon`.
- `npm run build`: Builds the TypeScript files to the `dist` directory.
