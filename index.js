const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'legyen.db',
        autoload: true
    });
app.use(cors())
app.use(bodyParser.json())


app.use(express.static('front-end/dist'))

app.get('/cica', (req, res) => res.send('Hello Macska!'))

app.post('/amoba', (req,res) => {
    console.log(req.body)
    db.insert(req.body, (err, nd) => {
        if (err) {
            res.send(err)
        } else {
            res.send(nd)
        }
    } )
})

app.listen(3000)