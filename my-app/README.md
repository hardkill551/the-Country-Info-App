Aqui está o README atualizado sem os testes no front-end e sem o botão de troca de tema, já que você optou por manter o tema com base na configuração do sistema operacional do usuário. Adicionei também uma explicação sobre como configurar o **Prettier** para formatação automática de código.

---

# Country Info App - Front-end

Front-end for the **Country Info App**, a service that provides detailed information about countries, including population data, border countries, and flags.

## About

This front-end is built using **React.js** with **Next.js** and **TailwindCSS** for responsive design and fast performance. The application allows users to explore countries, view population trends, and navigate between countries that share borders.

## Features

- **Country List Page**: Displays a list of countries fetched from the back-end API.
- **Country Info Page**: Shows detailed information about a selected country including:
  - Country Name and Flag
  - List of Border Countries (with links to their info pages)
  - Population Data Chart over the years.

## Tech Stack

- **React.js** with **Next.js**
- **TailwindCSS** for styling and responsiveness
- **Chart.js** for rendering population data as a line chart
- Integration with the back-end via API calls to fetch country data

## How to run for development

### 1. Clone this repository

```bash
git clone https://github.com/hardkill551/the-Country-Info-App
cd my-app
```

### 2. Install dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Configure environment variables

You will need to configure the `.env` file to point the front-end to the back-end API. Create a `.env.local` file in the root of your project and add the following:

```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

Adjust the value of `NEXT_PUBLIC_BACKEND_URL` to the URL of your back-end server. If you're running the back-end locally, it will typically be `http://localhost:5000`.

### 4. Run the development server

To start the front-end development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`. Any changes you make will be hot-reloaded.

## How to build for production

If you want to create a production build of the application, use the following commands:

### 1. Build the project

This command compiles and optimizes the application for production:

```bash
npm run build
```

### 2. Start the production server

Once built, you can start the server in production mode:

```bash
npm start
```

The production build will be served at `http://localhost:3000`.

## Linting and Code Formatting

To maintain code quality and consistent formatting, it's recommended to use **ESLint** for linting and **Prettier** for code formatting.

### Adding Prettier for Code Formatting

1. Install Prettier and its integration with ESLint:

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

2. Create a `.prettierrc` file in the root of the project to define your Prettier rules. For example:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all"
}
```

3. Update your **ESLint** configuration in `.eslintrc.js` to include Prettier:

```javascript
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
```

4. Add a script to **package.json** to run Prettier:

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

### Running Prettier

To format your code, run:

```bash
npm run format
```

This will format all files according to your Prettier rules.

### Running ESLint

To check for syntax and code issues:

```bash
npm run lint
```

The ESLint configuration ensures that your code follows best practices and integrates with Prettier to enforce consistent formatting rules.

## Environment Variables

The project uses environment variables to interact with the back-end API. Ensure that you have the `.env.local` file set up with the correct environment variables. You can refer to the example below:

```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

This variable is necessary for the front-end to make requests to the back-end for country data.

## Customization

### Responsiveness

The entire front-end is built with responsiveness in mind using **TailwindCSS**. The layout adjusts dynamically to different screen sizes, ensuring an optimal experience on mobile devices, tablets, and desktops.

---

### Summary

- This project is a **React** and **Next.js** front-end built with **TailwindCSS** for styling.
- The application fetches country data from a back-end and renders it dynamically.
- Environment variables are used to configure the API URL.
- Code quality is maintained using **ESLint** and **Prettier**.

With this README, you'll be able to guide developers on how to set up, run, and maintain the project while ensuring consistent code formatting and quality.