const express = require('express')
const app = express()

// Route for the home page
app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>
  `)
})

app.get('/:number_of_bottles', (req, res) => {
    const bottles = parseInt(req.params.number_of_bottles)
  
    if (bottles === 0) {
      res.send(`
        <h1>No more bottles of beer on the wall!</h1>
        <a href="/">Start over</a>
      `)
    } else {
      const nextBottle = bottles - 1
      const link = nextBottle === 0 ? "No more bottles" : `<a href="/${nextBottle}">Take one down, pass it around</a>`
      res.send(`
        <h1>${bottles} ${bottles === 1 ? 'Bottle' : 'Bottles'} of beer on the wall.</h1>
        ${link}
        <br>
        <a href="/">Start over</a>
      `)
    }
  })
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Connected to PORT ${PORT}`)
  })