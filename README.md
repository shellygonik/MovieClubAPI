# Movie Club API

## Project Description

Movie Club API is a REST API built with Node.js and Express.

The system allows users to:

- Register a new account
- Login using JWT authentication
- Browse all movies
- Get a movie by ID
- Filter movies
- Add movies to favorites
- View favorite movies
- Search real movie information using the OMDb API
- Get a trivia question from an external API

---

## Technologies

- Node.js
- Express
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- Winston Logger

---

## Installation

Install all dependencies:

```bash
npm install
```

---

## Run the project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

## API Endpoints

### Register

POST

```
/api/users/register
```

Request Body:

```json
{
    "username": "Shelly",
    "password": "123456"
}
```

---

### Login

POST

```
/api/users/login
```

---

### Get All Movies

GET

```
/api/movies
```

---

### Get Movie By ID

GET

```
/api/movies/3
```

---

### Filter Movies

GET

```
/api/movies?filterBy=genre&condition=eq&value=Action
```

---

### Search Movie (OMDb API)

GET

```
/api/movies/search?title=Titanic
```

---

### Get Favorite Movies

GET

```
/api/users/1/favorites
```

---

### Add Favorite Movie

POST

```
/api/users/1/favorites
```

---

### Get Trivia Question

GET

```
/api/trivia
```

---

## Project Structure

```
config/
controllers/
dal/
middlewares/
routes/
services/
utils/
logs/
```

---

## Author

Shelly Gonik