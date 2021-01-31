'use strict'
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { nextTick } = require('process');
//Read main folder
exports.findAll = function (req, res) {
    //joining path of directory 
    const directoryPath = path.resolve("./public");
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        console.log(files);
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        var folder = {};
        folder['folders'] = {};
        folder['files'] = {};
        var i = 0;
        var j = 0;
        files.forEach(function (file) {
            var fullpath = directoryPath + '/' + file;
            if (fs.lstatSync(fullpath).isDirectory()) {
                console.log("Es carpeta");
                folder['folders'][i] = file;
                i = i + 1;
            } else {

                console.log("Es fichero");
                folder['files'][j] = file;
                j = j + 1;
            }
        });
        res.send(folder);
    });

}


exports.readFolder = function (req, res) {
    /*console.log(req.path);
    var ruta = req.path.split('-');
    console.log(ruta);*/
    //joining path of directory 
    const directoryPath = path.resolve("./public/" + req.path);
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        console.log(files);
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        var folder = {};
        folder['folders'] = {};
        folder['files'] = {};
        var i = 0;
        var j = 0;
        files.forEach(function (file) {
            var fullpath = directoryPath + '/' + file;
            if (fs.lstatSync(fullpath).isDirectory()) {
                console.log("Es carpeta");
                folder['folders'][i] = file;
                i = i + 1;
            } else {

                console.log("Es fichero");
                folder['files'][j] = file;
                j = j + 1;
            }
        });
        res.send(folder);
    });
}

exports.create = function (req, res) {

    var folder = req.params.folder;
    var storage = multer.diskStorage({
        destination: 'public/' + folder + '/',
        filename: function (req, file, callback) {
            console.log(file);
            switch (file.mimetype) {
                case 'image/jpeg':
                    var extension = 'jpg';

                default:
                    break;
            }
            callback(null, 'cover' + '.' + extension);
        }
    });
    var upload = multer({ storage: storage }).single('cover');
    upload(req, res, function (err) {
        try {
            const cover = req.files.cover;
            console.log(cover);

            // make sure file is available
            if (!cover) {
                res.status(400).send({
                    status: false,
                    data: 'No file is selected.'
                });
            } else {
                // send response
                res.send({
                    status: true,
                    message: 'File is uploaded.',
                    data: {
                        name: cover.name,
                        mimetype: cover.mimetype,
                        size: cover.size
                    }
                });
            }

        } catch (err) {
            res.status(500).send(err);
        }
    });

};

exports.delete = function (req, res) {

};
