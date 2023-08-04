import dotenv from 'dotenv'
import { Command } from 'commander'

const program = new Command()

program
    .option('--mode <mode>', 'Modo de ejecución', 'development')
program.parse()

// console.log(program.opts().mode === 'development')

dotenv.config({
    path: program.opts().mode === 'development'
        ? './.env.development'
        : './.env.production'
})

export default {
    port: process.env.PORT,
    mongo_uri: process.env.MONGO_URI
}