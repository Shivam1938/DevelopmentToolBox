# DevelopmentToolBox

Simple backend project built using **Node.js, Express, and MongoDB**.

This project is mainly created to understand:

* CRUD Operations
* Layered Architecture
* Database management abstraction

The main goal is to structure backend code in a scalable way so that changing the database in future becomes easier.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Project Structure

```bash
src/
│── config/
│── routes/
│── app.js
│── server.js
```

Architecture is designed in layers to keep code clean and maintainable.

---

## Features

* Create Tool
* Read Tools
* Update Tool
* Delete Tool

---

## API Base URL

```bash
http://localhost:5000/api/v1
```

Example:

```bash
GET /api/v1/tools
```

---

## Run Locally

Install dependencies:

```bash
yarn install
```

Start server:

```bash
yarn start
```

---

## Status

🚧 Work in Progress
