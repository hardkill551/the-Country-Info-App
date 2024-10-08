# Country Info App - Full Stack

[**Live Demo: the-country-info-app.vercel.app**](https://the-country-info-app.vercel.app)

This is the complete repository for the **Country Info App**, a full-stack application that provides detailed information about countries, such as borders, population data, and flags.

## Technologies Used

- **Back-end**: Node.js, Express.js, TypeScript
- **Front-end**: Next.js (React.js)
- **Docker**: Used for deploying the application, both the back-end and front-end
- **External APIs**:
  - Nager.Date API for country information
  - CountriesNow API for population data and flags

## Features

### Front-end:
- Lists all available countries.
- Displays detailed information about each country, such as name, flag, bordering countries, and population charts.
- Responsive design with a modern interface.

### Back-end:
- Provides endpoints to list countries and show detailed country information.
- Integrates with external APIs to fetch data such as borders, population, and flags.

---

## Project Structure

```
/root-directory
  ├── back-app/              # Back-end code (Node.js + Express)
  ├── my-app/                # Front-end code (Next.js)
  └── docker-compose.yml     # Docker Compose orchestration file
```

---

## Environment Variables

This project uses environment variables to configure the connection to external APIs and define service URLs.

### **back-app/.env**

These environment variables control the back-end and its interactions with external APIs:

```bash
PORT=5000
NAGER_AVAILABLE_COUNTRIES_URL=https://date.nager.at/api/v3/AvailableCountries
NAGER_COUNTRY_INFO_URL=https://date.nager.at/api/v3/CountryInfo
COUNTRIES_NOW_POPULATION_URL=https://countriesnow.space/api/v0.1/countries/population
COUNTRIES_NOW_FLAG_URL=https://countriesnow.space/api/v0.1/countries/flag/images
```

- `PORT`: The port on which the back-end will run.
- `NAGER_AVAILABLE_COUNTRIES_URL`: Endpoint to fetch the list of available countries.
- `NAGER_COUNTRY_INFO_URL`: Endpoint to fetch specific country information.
- `COUNTRIES_NOW_POPULATION_URL`: Endpoint to fetch population data.
- `COUNTRIES_NOW_FLAG_URL`: Endpoint to fetch country flags.

### **my-app/.env.local**

These environment variables are used for the front-end:

```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

- `NEXT_PUBLIC_BACKEND_URL`: URL of the back-end that the front-end will use to communicate.

---

## How to Run the Project with Docker

This project is set up to run both the front-end and the back-end using Docker, simplifying the environment setup and execution.

### Prerequisites

- Docker and Docker Compose installed on your machine.

### Steps to Run the Project

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/country-info-app.git
cd country-info-app
```

2. **Configure the `.env` files**:

Ensure that the `.env` files are correctly configured for the back-end (`back-app/.env`) and the front-end (`my-app/.env.local`). These files are already pre-configured, but you can adjust them as needed.

3. **Run with Docker Compose**:

Run the following command to build and run the front-end and back-end containers:

```bash
docker-compose up --build
```

### Accessing the Services

- **Front-end (Next.js)**: Access the front-end at `http://localhost:3000`
- **Back-end (Node.js/Express)**: The back-end will be running at `http://localhost:5000`

### Details of Docker Compose Orchestration

In the `docker-compose.yml` file, we have the following services:

- **backend**:
  - Builds the back-end container using the Dockerfile in the `back-app` folder.
  - Exposed on port 5000.
  - Uses the environment variables provided in the `back-app/.env` file.

- **frontend**:
  - Builds the front-end container using the Dockerfile in the `my-app` folder.
  - Exposed on port 3000.
  - Depends on the back-end service and uses the back-end URL provided in the `my-app/.env.local` file.

---

## Features and Usage

### 1. **Country List Page**:

The `/countries` page displays a list of countries fetched from the back-end. Each country is a link that navigates to the country’s detail page.

### 2. **Country Detail Page**:

Each country has a detail page that displays:
- Country name.
- Flag.
- A list of bordering countries (clickable links).
- A chart displaying population data over time.

---

## Possible Future Enhancements

- **Authentication and Authorization**: To enhance security, authentication could be implemented in the future.
- **Unit and Integration Testing**: Both the front-end and back-end can be expanded with tests using frameworks such as Jest and Supertest.
- **Response Caching**: Implement caching to improve performance when fetching data from external APIs.

---

## Useful Commands

### To Run Docker Compose:

```bash
docker-compose up --build
```

### To Stop Containers:

```bash
docker-compose down
```

### To Rebuild Containers:

```bash
docker-compose up --build --force-recreate
```