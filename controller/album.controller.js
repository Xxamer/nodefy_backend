'use strict'


exports.findAll = function (req, res) {
    //TODO scandir

    res.send("Caca");


}

exports.create = function (req, res) {
    res.send(console.log(req.body.name));

    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {

            let cover = req.files.cover;
            if (cover.mimetype == "image/jpeg") {
                var extension = "jpg"
            }
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            cover.mv('./public/' + req.body.name + '/cover.' + extension);

            //send response
            /*  res.send({
                 status: true,
                 message: 'File is uploaded',
                 data: {
                     name: avatar.name,
                     mimetype: avatar.mimetype,
                     size: avatar.size
                 }
             });*/
        }
    } catch (err) {
        res.status(500).send(err);
    }
    if (!req.body) {
        res.send({
            status: false,
            message: 'F bro'
        });
    } else {
        res.send({
            status: false,
            message: 'Correcto'
        });
    }

};

exports.delete = function (req, res) {

};
