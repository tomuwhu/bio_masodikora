const express = require('express')
const app = express()

app.use(express.static('front-end/dist'))

app.get('/cica', (req, res) => res.send('Hello Macska!'))

app.listen(3000)