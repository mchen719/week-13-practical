const express = require('express') // imported express from node modules
const app = express()


app.get('/', (req, res) => {
    res.send(`Hello stranger!`)
})

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
    })

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const { total, tipPercentage } = req.params
      
    const totalAmount = parseFloat(total)
    const tipPercentageValue = parseFloat(tipPercentage)
    
    if (isNaN(totalAmount) || isNaN(tipPercentageValue)) {
        return res.status(400).send('Invalid input. Please provide valid numbers.')
    }
      
    const tipAmount = (totalAmount * tipPercentageValue) / 100
      
    res.send(`Tip amount:$${tipAmount}`)
    });
      

    
app.listen(3000, () => { 
    console.log('Connected')
    })