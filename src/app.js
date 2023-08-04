import express from 'express'
import { fork } from 'child_process'

const app = express()

app.get('/simple', (req, res) => {
    res.send('Hola Mundo!!')
})

app.get('/complex', (req, res) => {
    // const result = operacionCompleja()
    const child = fork('./src/utils.js')
    child.on('message', result => {
        res.json({ status: 'success', payload: result })
    })
})

app.listen(8080, () => console.log('Server Up!'))