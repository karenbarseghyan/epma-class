import express, {Express, Response, Request} from 'express';
import { createConnection } from 'typeorm';
import {User} from './entities/user'

createConnection({
  type: 'postgres',
  database: "rainbow_database",
  username: "unicorn_user",
  password: "magical_password",
  logging: true,
  synchronize: true,
  entities: [User]
})

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})