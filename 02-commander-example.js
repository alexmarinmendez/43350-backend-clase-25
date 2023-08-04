import { Command } from 'commander'

const program = new Command()

program
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('--port', 'Puerto del servidor', 8080)

program.parse()

console.log('Options:' , program.opts())
console.log('Server Up on port', program.opts().p)