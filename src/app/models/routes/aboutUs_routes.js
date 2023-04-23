/**
 * @name: aboutUs_routes.
 * @desc: Defines the aboutUs_route of the project.
 */
const express = require('express')

const router = express.Router()
const aboutUs_controller = require('../controllers/aboutUs_controller')

router.get('/aboutUs', aboutUs_controller.aboutUs_page)

module.exports = router