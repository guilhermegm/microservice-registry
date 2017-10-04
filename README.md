# Microservice Registry

Simple service registry

## Usage

```
npm run start:docker
```

## Folder Structure

 - src
   - app
     - index.js- Express and middlewares setup
     - settings.js - Should define the constants of the project, usually its first argument is a env variable (process.env.ENV_VAR || ‘default value’)
   - common
     - Functions, helpers, enums... that are shared in our code
   - domains - here comes all code that refer to the domain (DDD)
     - v1 - API version
       - domain_name - should be plural
         - DomainName.service.js  - where all business rules and entities lives and calls the repository if needed
         - DomainName.repository.js - the storage representation and “saves the data”
         - DomainName.controller.js - handle the authorization and calls the service
         - DomainName.routes.js - handle the routes and calls the controller

## Libraries

Node (8.6)

### Express (4.15.5)

https://expressjs.com/

### Eslint (3.19)

#### Airbnb (15.1)

Trailing comma: To clearer the git diff. (https://github.com/airbnb/javascript#commas--dangling)
Semicolons: https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214

### Glob (7.1.2)

https://www.npmjs.com/package/glob
Used to dynamically load the subdomains routes

### Lodash (4.17.4)

https://lodash.com

### Schema Object
https://github.com/scotthovestadt/schema-object

### Compression

https://github.com/expressjs/compression

### Helmet

https://github.com/helmetjs/helmet

### Health-Check Endpoint

https://github.com/guilhermegm/health-check-endpoint

## Development

Most of cases the function should return a Promise
Use composition over inheritance

### Composition

https://medium.com/humans-create-software/composition-over-inheritance-cb6f88070205
https://developers.caffeina.com/object-composition-patterns-in-javascript-4853898bb9d0


### RESTful Guidelines

https://medium.com/studioarmix/learn-restful-api-design-ideals-c5ec915a430f
https://docs.google.com/a/jurosreais.com/document/d/1kMH9qJMBja01bsPrC1hGJw0ovUhMRTAMth6lHSp4tuo/edit?usp=sharing
