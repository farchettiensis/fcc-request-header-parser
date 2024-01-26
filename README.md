# Request Header Parser Microservice

This project is part of the freeCodeCamp Back End Development and APIs certification. It provides a simple API endpoint to extract information from the client's request headers.

## Project Overview

This project uses Node.js and Express.js to create a simple web server. The main functionality includes:

- Serving static files from the `public` directory.
- Providing an API endpoint at `/api/whoami` to retrieve information about the client's request.

## How to Run

1. Install the required dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and set any environment variables if needed.

3. Run the application:

   ```bash
   npm start
   ```

   The app will be accessible at `http://localhost:3000` by default.

## Endpoints

### 1. Home Page

- **Route**: `/`
- **Description**: Serves the static HTML file located in the `views` directory.

### 2. API Endpoint

- **Route**: `/api/whoami`
- **Method**: GET
- **Description**: Retrieves information about the client's request headers, including IP address, preferred language, and software details.

   #### Example Response:
   ```json
   {
     "ipaddress": "127.0.0.1",
     "language": "en-US,en;q=0.9",
     "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
   }
   ```

## Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv): Load environment variables from a .env file.
- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [cors](https://www.npmjs.com/package/cors): Middleware to enable CORS (Cross-Origin Resource Sharing).