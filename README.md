# Template.ts [![Build Status](https://travis-ci.org/jonathanballs/template.ts.svg?branch=master)](https://travis-ci.org/jonathanballs/template.ts)

A template for typescript/express projects.

## Getting started
* `yarn install`: to install dependencies
* `yarn build`: to compile the client and server to javascript
* `yarn start`: to start the server

## All commands
All of the run-scripts have a "watch mode" which reruns the command when files change.

* `yarn run build`: Compiles the client and server
* `yarn run build:watch`: in watch mode
* `yarn run start`: Starts the server
* `yarn run start:watch`: in watch mode
* `yarn run test`: Runs the jest test suite
* `yarn run test:watch`: in watch mode

## Environment variables

* `PORT`: The port on which the project is served

## Todo

- [ ] Deploy to dockerhub & dokku
- [ ] Sentry integration/remote debugging. (insight to running process).
- [ ] Joi
- [ ] Editorconfig/eslint
