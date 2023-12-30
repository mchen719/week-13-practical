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

const magic8BallResponses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
    ];
      
app.get('/magic/:question', (req, res) => {
    const userQuestion = req.params.question.replace(/%20/g, ' ')
      
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)]
      
    res.send(`<h1>User's Question: ${userQuestion}</h1><h1>Magic 8 Ball Response: ${randomResponse}</h1>`)
    });

    
app.listen(3000, () => { 
    console.log('Connected')
    })