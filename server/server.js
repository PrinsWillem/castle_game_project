const express = require('express');
const app = express();

const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const createrRouter = require('./helpers/create_router.js');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('castle_game');
        const cardsCollection = db.collection('cards');
        const cardsRouter = createrRouter(cardsCollection);
        app.use('/cards', cardsRouter);
    })
    .catch(console.error);

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});
