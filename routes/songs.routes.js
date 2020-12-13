const express = require('express')
const router = express.Router()
const songs = require('../controller/songs.controller');

router.get('/', songs.findAll);
// Upload songs
router.post('/upload', songs.create);
// Update a song with id
//router.put('/:id', songs.update);
module.exports = router;