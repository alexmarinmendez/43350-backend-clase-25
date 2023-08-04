import express from 'express'
import { Command } from 'commander'

const program = new Command()

program
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('--mode <mode>', 'Modo de ejecución', 'development')
program.parse()

const port = program.opts().p
const mode = program.opts().mode

const app = express()

let database

if (mode === 'development') {
    database = 'localhost'
} else {
    database = 'mongo atlas'
}

app.get('/', (req, res) => res.send(`Server Ok, Connected to ${database}`))

app.listen(port, () => console.log(`Server Up on port ${port}`))