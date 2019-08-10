const express = require('express');
const http = require('http'); // хз що це
const bodyParser = require('body-parser');
const path = require('path');
const ap = express();

ap.use(bodyParser.json());
ap.use(express.static(path.resolve(__dirname, './')));

ap.post('/marks', (req, res) => {
    const fs = require('fs');
    fs.appendFile('./notes.txt', JSON.stringify(req.body) + '\n', () => {
        res.send('good');
    })
})













ap.listen(process.env.port || 3000, process.env.IP || '0.0.0.0');