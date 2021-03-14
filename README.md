### ClearGlass Cost Explorer
+ Prerequisites
1. MySql
2. NPM
3. Node.js

#### Setup

+ Run `npm i`
+ Add `.env` file with `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_DIALECT`, `DB_NAME`, `DB_PORT`


#### To run test

Run `npm test`

#### To run server

Run `npm start`

* Body structure
```json
{
    "clientId": [<Client Id>],
    "projectId": [<Project Id>],
    "costTypeId": [<Cost Type Id>]
}
```

all filters are optional