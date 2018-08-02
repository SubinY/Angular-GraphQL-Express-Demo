# Angular-GraphQL-Express-Demo

Fork for make a quick share demo

## Dependencies
Angular
Express
Mongoose
Apollo

## Install

Install npm modules.

```shell
npm run app-install
```

copy `.env.example` to `.env`, edit database info, etc.

## Configure Database

Create a table called `users` including two fields `_id` and `username`

Add some mock data manually

## Build & Test

### Client

```shell
npm run start
```

Open `localhost:4200`

### Server

```shell
cd client && ng build
cd server && npm run start
```

Open `localhost:3000`


### GraphiQL query page

Open `localhost:3000/graphiql`

test:

```graphiql

### 查询用户
query {
  users{
    id
    username
  }
}

### 新增用户
# mutation{
#   createUser(username:"test"){
#     id,
#     username
#   }
# }

### 更新用户
# mutation{
#   updateUser(id:"5b62b95e530ec2571455773b",username:"giscafer"){
#     id,
#     username
#   }
# }

```

### For more infomation

[https://github.com/Xilesun/imqia](https://github.com/Xilesun/imqia)

