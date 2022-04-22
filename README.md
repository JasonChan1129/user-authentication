# User Authentication

A simple user login page to practise using Cookie-based Authentication

![image](/public/demo.png)

## Prerequisites

-  Node.js
-  Register an account for [MongoDB Altas](https://www.mongodb.com/atlas/database)

## Installation and execution

1. Clone this project with your terminal

```
git clone https://github.com/JasonChan1129/user-authentication.git
```

2. Install all the required dependencies

```
npm install
```

3. Install nodemon if you don't already have

```
npm i nodemon
```

4. Create a .env file for storing environment variables

5. Copy the connection string from [MongoDB Altas](https://www.mongodb.com/atlas/database) and place it in .env file

```
MONGODB_URI=<your connection string>
```

7. Run seed data

```
npm run seed
```

6. Start the server

```
npm run dev
```

7. Server runs successfully if the following message is printed.

```
Server is listening on localhost:3000
db connected!
```

## Features

-  use the given pairs of email and password to login (data in /users.js)
-  once logged in, login state will be preserved
-  able to logout

## Development tools

-  bootstrap @ 5.1.3
-  cookie-parser @ 1.4.6
-  dotenv @ 16.0.0
-  express @ 4.17.3
-  express-handlebars @ 4.0.2
-  mongoose @ 6.3.0
-  node.js @ 16.14.2
