const express = require('express')
const router = express.Router()
const songs = require('../controller/songs.controller');

router.get('/', songs.findAll);
// Upload songs
router.post('/upload', songs.create);
module.exports = router;