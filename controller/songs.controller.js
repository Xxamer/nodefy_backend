'use strict'
const multer = require('multer');

const url = require('url');
exports.findAll = function (req, res) {
    //TODO scandir

    res.send("Caca");


}

exports.create = function (req, res) {
    //We transfer the folder name through URL
    var folder = req.params.folder;
    console.log(folder);
    var storage = multer.diskStorage({
        destination: 'public/' + folder + '/',
        filename: function (req, file, callback) {
            callback(null, file.originalname);
        }
    });
    let upload = multer({ storage: storage }).array('songs', 10);

    upload(req, res, function (err) {


        let upload = multer({ storage: storage }).array('songs', 10);

        try {
            const songs = req.files;
            console.log(songs);
            // check if songs are available
            if (!songs) {
                res.status(400).send({
                    status: false,
                    data: 'No song is selected.'
                });
            } else {
                let data = [];

                // iterate over all songs
                songs.map(p => data.push({
                    name: p.originalname,
                    mimetype: p.mimetype,
                    size: p.size,
                }));
                // send response
                res.send({
                    status: true,
                    message: 'songs are uploaded.',
                    data: data
                });
            }

        } catch (err) {
            res.status(500).send(err);
        }
    });
}

exports.delete = function (req, res) {

};