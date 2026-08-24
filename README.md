# Express Server

A basic Express.js backend server built with CommonJS modules. This project demonstrates Node.js setup, automated testing, continuous integration, and deployment to development and production environments.

## Author

AGiv Lab

## Application Structure

```text
express-server/
├── .github/
│   └── workflows/
│       └── node.yml
├── __tests__/
│   └── server.test.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone git@github.com:AGiv-lab/express-server.git
```

Enter the project directory:

```bash
cd express-server
```

Install the dependencies:

```bash
npm install
```

## Environment Setup

Create a `.env` file in the root of the project:

```text
PORT=3001
```

The `.env` file is ignored by Git and should not be committed.

## Running the Server

Start the server:

```bash
npm start
```

Open the following address in a browser:

```text
http://localhost:3001
```

Expected response:

```text
Backend Server Running!
```

Stop the server with `Ctrl+C`.

## API Endpoint

| Method | Path | Response |
|---|---|---|
| GET | `/` | `Backend Server Running!` |

## Testing

Run the Jest and Supertest test suite:

```bash
npm test
```

Run the tests automatically while editing:

```bash
npm run watch
```

Supertest sends requests directly to the Express application without starting a network server.

## Continuous Integration

GitHub Actions installs the dependencies and runs the test suite whenever code is pushed to `dev` or `main`, or when a pull request targets `main`.

- [GitHub Actions](https://github.com/AGiv-lab/express-server/actions)
- [Pull Request #1](https://github.com/AGiv-lab/express-server/pull/1)

## Deployments

- [Development deployment](https://express-server-a1n1.onrender.com)
- [Production deployment](https://express-server-production.onrender.com)

## UML

```mermaid
flowchart TD
    A["Browser client"] -->|"GET /"| B["Render web service"]
    B --> C["server.js Express application"]
    C --> D["GET / route handler"]
    D -->|"200 text response"| A
    E["Jest and Supertest"] -->|"Test request"| C
    C -->|"Test response"| E
``````

