# Things-go-social

## [REST API Documentation here](https://documenter.getpostman.com/view/16483753/Tzm9kaRk)

```diff
! This Project was created as task for things-go-social
```
## Prerequisites

- Please run your mongoDB database first
- Once the DB is running, please check if the PROD.env file is up to date with the DB_URL
```dotenv
DB_URL='mongodb://127.0.0.1:27017/users-db'
PORT=8000
```

```shell
 ~/path/to/mongodb/bin/mongod --dbpath="./path/to/db-data"
```

## To Run
```shell
npm install
npm run start
```

### Start Script
```json
"start": "env-cmd -f ./prod.env node src/index.js"
```

## dependencies

### Dependencies
- express@4.17.1
- mongoose@5.13.2

### Dev Dependencies
- chalk@3.0.0
- env-cmd@10.1.0
- nodemon@2.0.12