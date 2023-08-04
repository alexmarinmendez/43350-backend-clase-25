import express from 'express'
import config from './config.js'

const port = config.port
const mongo_uri = config.mongo_uri

const app = express()

app.get('/', (req, res) => res.send(`Server Ok, Connected to ${mongo_uri}`))

app.listen(port, () => console.log(`Server Up on port ${port}`))