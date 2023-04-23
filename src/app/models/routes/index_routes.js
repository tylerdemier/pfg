/**
 * @name: Index_routes
 * @desc Defines the index_route of the project.
 */
const express = require('express')

const router = express.Router()
const index_controller = require('../controllers/index_controller')

router.get('/', index_controller.index_page)

module.exports = router