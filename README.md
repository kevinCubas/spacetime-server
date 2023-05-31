# NLW - Spacetime SERVER
Back-end Time capsule designed to help you collect your most memorable moments. This README document provides an overview of the features, used technologies, and functionalities of the application, as well as instructions on how to set it up and use it effectively.

You may find the frontend application in the following repo: [FrontendApp](https://github.com/kevinCubas/spacetime-web)

## Technologies Used:

- [Node](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/pt/)
- [zod](https://github.com/colinhacks/zod): Library for schema validation
- [axios](https://axios-http.com/ptbr/docs/intro)
- [Fastify](https://www.fastify.io/)
- [@fastify/cors](https://www.npmjs.com/package/@fastify/cors): enabling Cross-Origin Resource Sharing (CORS) in Fastify
- [@fastify/jwt](https://github.com/fastify/fastify-jwt): JWT authentication plugin for Fastify
- [@fastify/multipart](https://github.com/fastify/fastify-multipart): Plugin for handling multipart/form-data requests in Fastify
- [@fastify/static](https://www.npmjs.com/package/@fastify/static): Plugin for serving static files in Fastify
- [Prisma](https://www.prisma.io/)
- [@prisma/client](https://www.npmjs.com/package/@prisma/client): Prisma Client for database access
- [eslint](https://eslint.org/): @rocketseat/eslint-config
- [dotenv](https://www.npmjs.com/package/dotenv)
- [GIT](https://git-scm.com/)

## Features:

- [x] Authentication: The application retrieves the access token and user information from GitHub and creates a user in the database if they are not already registered. A JWT (JSON Web Token) is generated and returned to the frontend for subsequent API requests.

- [x] GET memories: This action retrieves all the memories created by the user. The backend fetches the memories associated with the user ID from the database and returns them as a list.

- [x] GET memory details(get by id):The backend fetches the memory from the database based on the provided memoryId. If the memory is public, it can be accessed by other users as well. The details of the memory, including its description, media, visibility, and creation timestamp, are returned to the frontend.

- [x] Create(POST) new memory: The user provides the necessary details such as description, media (image or video), and visibility (public or personal). Associates the memory with the user, and saves it in the database.

- [x] Edit(PUT) Memory: verifies that the memory belongs to the authenticated user, and updates the corresponding record in the database.

- [x] Delete(DELETE) Memory: verifies that the memory belongs to the authenticated user and deletes the corresponding record from the database. This action is irreversible, and once a memory is deleted, it cannot be recovered.

## Routes

- /auth: Handles authentication with GitHub, retrieves access tokens, and creates users in the database.
- /memories: CRUD operations for memories with JWT verification.
- /uploads: Handles media local uploads, validates the format and file size, and return the URL to the front.

## Prisma Schema
The databe of the application is the SQLite.
It consists of two models:

- User: Represents a user in the system and stores their GitHub information.
- Memory: Represents a memory created by a user, including the associated user ID, cover URL, content, visibility status, and creation timestamp.

## Installation and Setup:
- Clone the repository from [https://github.com/kevinCubas/spacetime-server.git].

### Requirements

- [Node](https://nodejs.org/en): 17 or latest version
- [NPM](https://www.npmjs.com/): 9 or latest version (NPM is included with Node)
- [GIT](https://git-scm.com/)

#### GITHUB OAuth token AND .env set up

1. Go to the GitHub Developer Settings page: `https://github.com/settings/developers`.

2. Click on "New OAuth App" to create a new OAuth App.

3. Fill in the following information for your OAuth App:

- Application Name: Choose a name for your application.
- Homepage URL: `http://localhost:3000`. - change port if necessary.
- Authorization callback URL: Enter the callback URL where GitHub will redirect users after authentication. For local development, we are using `http://localhost:3000/api/auth/callback` in the frontend

4. Click on **"Register Application"** to create the OAuth App.

After creating the OAuth App, you will see the "Client ID" and "Client Secret" on the OAuth App page. These credentials will be used to authenticate your application with GitHub.

5. In your project, create a .env file in the root directory if it doesn't already exist.

6. Set the DATABASE_URL environment variable

```JS
DATABASE_URL="file:./dev.db"
```

7. Set the GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET environment variables, replacing <CLIENT_ID> and <client_secret> with your actual credentials obtained from the GitHub OAuth App page:

```JS
GITHUB_CLIENT_ID=<client_id>
GITHUB_CLIENT_SECRET=<client_secret>
```

_Remember to keep your GitHub Client ID and Client Secret secure and never expose them publicly_.

### Steps to install and run:

1. Clone the repository
```cl
  git clone https://github.com/kevinCubas/spacetime-server.git
```

2. Change into the project directory: 
```cl
cd spacetime-server
```

3. Install dependencies using npm:
```cl
  npm install
```
4. Run the application locally: port 3333

```cl
  npm run dev
```

## Contributing

To contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them using Conventional Commits
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request


## Contributors:

[KevinCubas](https://github.com/kevinCubas)
