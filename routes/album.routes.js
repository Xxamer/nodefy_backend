const express = require('express')
const router = express.Router()
const album = require('../controller/album.controller');
router.get('/', album.findAll);
// Create a new album
router.post('/create', album.create);
// Update a song with id
//router.put('/:id', album.update);
module.exports = router;