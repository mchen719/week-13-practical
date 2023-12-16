const express = require('express') // imported express from node modules
const app = express()


app.get('/', (req, res) => {
    res.send(`Hello stranger!`)
})

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
    })



    
app.listen(3000, () => { 
    console.log('Connected')
    })