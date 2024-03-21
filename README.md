# E-Commerce back end using Object-Relational-Mapping (ORM)


## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#usage)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

## Description

Welcome to the E-Commerce back end using Object-Relational-Mapping (ORM), where you have a robust back end system that can handle large amounts of unstructured data typical of E-Commerce.


## Features

- Functional Express.js API: Connects seamlessly to a MySQL database using Sequelize for ORM.
- Secure Database Connection: Database name, MySQL username, and password stored in an environment variable file for secure connection.
- Database Initialization: Schema and seed commands set up a development database with test data.
- Server Start: Application starts the server and syncs Sequelize models to the MySQL database for seamless operation.
- API Routes: GET routes in Insomnia for categories, products, and tags display data in formatted JSON.
- API Operations: Test and perform successful creations, updates, and deletions using POST, PUT, and DELETE routes in Insomnia.


## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize
- Insomnia
- Javascript

## Installation

To run the e-commerce back end locally, you need to have Node.js installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine: `git clone https://github.com/thelmarivas/my-Ecommerce.git`.
2. Navigate into the `my-Ecommerce` folder.
3. Install the dependencies: `npm install`.
4. Set up your environment variables for the database connection.
5. Run schema and seed commands to initialize the database: `npm run seed`.
6. Start the server: `npm start`.
7. Test the API routes with Insomnia or Postman.


## Usage

Here is a demo video showcasting the functionality of the API: [Demo video](https://drive.google.com/file/d/1HNtLBcwYWN_S1p350Uvk1xGNJoCnz_8_/view)

Routes tested:
- GET /api/categories
- GET /api/products
- GET /api/tags
- GET /api/categories/:id
- GET /api/products/:id
- GET /api/tags/:id
- POST /api/categories
- POST /api/products
- POST /api/tags
- PUT /api/categories/:id
- PUT /api/products/:id
- PUT /api/tags/:id
- DELETE /api/categories/:id
- DELETE /api/products/:id
- DELETE /api/tags/:id

Tested with Insomnia.


## License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE) file for details.

## Contributing

Contributions are welcome, you can contact me for any suggestions or improvements.