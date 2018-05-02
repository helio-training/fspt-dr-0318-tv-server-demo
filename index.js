const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})
app.use(bodyParser.json())


const inMemoryDatabase = {
    shows: [
        {
            name: 'Trollhunters',
            rating: 3,
            previewImage: 'http://cdn03.cdn.justjaredjr.com/wp-content/uploads/headlines/2016/10/trollhunters-poster.jpg'
        },
        {
            name: 'Trollhunters - Kids',
            rating: 1,
            previewImage: 'http://cdn03.cdn.justjaredjr.com/wp-content/uploads/headlines/2016/10/trollhunters-poster.jpg'
        },
        {
            name: 'Trollhunters - ULTRA MATURE',
            rating: 5,
            previewImage: 'http://cdn03.cdn.justjaredjr.com/wp-content/uploads/headlines/2016/10/trollhunters-poster.jpg'
        }
    ]
}


app.get('/shows', (req, res) => {
    res.send(inMemoryDatabase.shows)
})

app.post('/shows', (req, res) => {
    const newShow = req.body
    inMemoryDatabase.shows.push(newShow)
    res.send('Added new show: ' + newShow.name)
})

app.listen('3001', () => console.log('Running on port 3001'))