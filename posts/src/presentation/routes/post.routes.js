const express = require('express');
const PostController = require("../controllers/post.controller");
const router = express.Router();

const posts = {};

router.get('/', PostController.getAll);
router.post('/', PostController.create);

module.exports = router;