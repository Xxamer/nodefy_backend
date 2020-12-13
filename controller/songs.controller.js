'use strict'

const _ = require('lodash');

exports.findAll = function (req, res) {
    //TODO scandir

    res.send("Caca");


}

exports.create = function (req, res) {
    //TODO fix only one upload 
    //TODO validate MP3
    try {
        console.log(_.size((req.files.songs)))
        console.log((req.files.songs))
        if (!req.files) {
            res.send({
                status: false,
                message: 'no file uploaded'
            });
        } else {
            let data = [];
            _.forEach(_.keysIn(req.files.songs), function (key) {
                let song = req.files.songs[key];
                //move files to the  directory
                song.mv('./public/uploads/' + song.name);
                //push file details
                data.push({
                    name: song.name,
                    mimetype: song.mimetype,
                    size: song.size
                });
            });
            res.status(200).send({
                status: 200,
                message: 'files are uploaded',
                data: data
            });
        }
    } catch (err) {
        res.status(500).send("" + err);
    }
}

exports.delete = function (req, res) {

};
