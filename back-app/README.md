# Country Info App - Back-end

Back-end for Country Info App, a service that provides detailed information about countries.

## About

Country Info App is a web application that provides detailed information about countries. It allows users to retrieve a list of available countries, get specific information about a selected country, including border countries, population data, and the country's flag.

The back-end is built using **Node.js**, **Express**, and **TypeScript**, and is designed to interact with external APIs to fetch the required data.

## Features

- Retrieve a list of available countries.
- Get specific details about a country, including:
  - Border countries.
  - Population data.
  - Flag URL.

## How to run for development

### 1. Clone this repository

```bash
git clone https://github.com/hardkill551/the-Country-Info-App
cd back-app
```
2. Install all dependencies.

```bash
npm install
```

3. Create a `.env` file based on the provided `.env.example` file and add the necessary environment variables for external API integration.

4. Run the back-end in a development environment:

```bash
npm run dev
```

## Environment Variables

This project requires environment variables to interact with external APIs. You can configure these variables by creating a `.env` file based on the `.env.example` file for different environments, such as development, production, and testing.

### Example of `.env` file:

```bash
NAGER_AVAILABLE_COUNTRIES_URL=https://date.nager.at/api/v3/AvailableCountries
NAGER_COUNTRY_INFO_URL=https://date.nager.at/api/v3/CountryInfo
COUNTRIES_NOW_POPULATION_URL=https://countriesnow.space/api/v0.1/countries/population
COUNTRIES_NOW_FLAG_URL=https://countriesnow.space/api/v0.1/countries/flag/images
```

You can use the same `.env` file for all environments, or you can create separate environment-specific files such as `.env.development`, `.env.production`, and `.env.test` as needed.

## Linting and Code Formatting

This project uses **ESLint** for linting and **Prettier** for code formatting.

### Running ESLint

To check for syntax and code issues:

```bash
npm run lint
```

The ESLint configuration ensures that TypeScript code follows best practices and integrates with Prettier to enforce consistent formatting rules.

### Running Prettier

To automatically format the code:

```bash
npm run format
```

This command ensures that all the code is formatted according to Prettier's rules.

## How to run for production

To run this project in a production environment:

1. Build the project for production:

```bash
npm run build
```

2. Ensure that your environment variables are set up correctly in a `.env` file for production.

3. Start the production server:

```bash
npm start
```

This will run the server using the compiled files in the `dist` directory.

## How to run tests

This project uses **Jest** for testing. You can run the tests with the following commands:

1. Follow the steps in the "How to run for development" section to set up your environment.
2. Create a `.env.test` file for environment variables needed during testing.

3. Run all tests:

```bash
npm run test
```

4. Run tests in watch mode:

```bash
npm run test:watch
```

5. Run tests with coverage:

```bash
npm run test:coverage
```

## What to do when adding new ENV VARIABLES

When adding new environment variables, follow these steps:

1. Add the new variables to the `.env.example` file as a template for future users.
2. Update your local `.env`, `.env.development`, `.env.production`, and/or `.env.test` files accordingly.
3. Make sure these variables are properly loaded in the application using `process.env`.

---

### Summary

- This project is a **Node.js** back-end built with **TypeScript**, **Express**, **ESLint**, and **Prettier**.
- The project requires environment variables to work properly, and these can be configured in `.env` files for different environments.
- Tests are configured using **Jest** and can be run using the provided npm scripts.

This should give you a well-organized README that fits your project's needs, without Docker and with proper instructions for setting up environment variables for development, production, and testing.