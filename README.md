## Summery
This project sets up boilerplate for using: 

- [Netlify lambda](https://github.com/netlify/netlify-lambda)
- Apollo federation & gateway

Functions code is inspired and forked from this [repo](https://github.com/bkegley/intro-to-graphql-meetup)

### Deploy

Deployable right away! Just add DB string to netlify env valuable.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/peter-wd-1/netlify-lambda-apollo-federation)

### Start

`ntl dev` 

This starts three lambda functions that federated by `@apollo/federation` and `@apollo/gateway`.

### DB Connection

Insert your mongoose db connection string to `.env` file in the root folder.
This only works on `ntl dev`.

