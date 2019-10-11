# fsts - A Full Stack Type Script Project Sample

This is a sample project created to be used as base for full stack TypeScript projects.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

In order to correctly use the application please make sure you have these two
working fine before we can get started:

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/)

## Installing the dependencies

```
yarn install
```

## Starting the application

### Server side

In order to start a development server, run:

```
yarn dev:api
```

This will start the API at `http://localhost:3000`

### Client side

In order to serve the client files, run:

```
yarn dev:client
```

This will serve the files at `http://localhost:1234`

```
yarn test
```

> **NOTE**:
> This will currently run tests for server side only.

## Roadmap

- [x] Add server side TypeScript support
- [x] Add client side TypeScript support
- [x] Add server side tests
- [ ] Add client side tests
- [ ] Add eslint on precommit

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
