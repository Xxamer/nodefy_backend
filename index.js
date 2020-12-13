const port = 3000;
const http = require("http");
const fs = require('fs');
const path = require('path');
const express = require("express");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'));

// Static folder to access the data
app.use(express.static('public'));
// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//Create HTTP server and listen on port 3000 for requests
app.get('/', function (req, res) {
    res.end('Conectado crack');
});


const albumRoutes = require('./routes/album.routes');
const songRoutes = require('./routes/songs.routes');
app.use('/album/', albumRoutes);
app.use('/songs/', songRoutes);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Example app listening on port ' + port))

