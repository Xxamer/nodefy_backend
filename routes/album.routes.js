const express = require('express')
const router = express.Router()
const album = require('../controller/album.controller');
router.get('/', album.findAll);
router.get('/:name', album.readFolder);
// Create a new album
router.post('/create/:folder', album.create);
// Update a song with id
//router.put('/:id', album.update);
module.exports = router;