import express from 'express'

const operacionCompleja = () => {
    let result = 0
    for (let index = 0; index < 5e9; index++) {
        result += index
    }
    return result
}

const app = express()

app.get('/simple', (req, res) => {
    res.send('Hola Mundo!!')
})

app.get('/complex', (req, res) => {
    const result = operacionCompleja()
    // const result = 10
    res.json({ status: 'success', payload: result })
    // res.send(result)
})

app.listen(8080, () => console.log('Server Up!'))