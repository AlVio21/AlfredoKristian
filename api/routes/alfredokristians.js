var express = require('express');
var router = express.Router();

const alfredokristiancontroller = require("../controller/alfredokristian");

router.post('/', alfredokristiancontroller.createPariwisata);

module.exports = router;
