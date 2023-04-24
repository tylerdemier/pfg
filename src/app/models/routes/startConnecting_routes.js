/**
 * @name: startConnecting_routes
 * @desc: Defines the startConnecting_route of the project.
 */
const express = require('express')

const router = express.Router()
const startConnecting_controller = require('../controllers/startConnecting_controller')

router.get('/startConnecting', startConnecting_controller.startConnecting_page)
router.post('/startConnecting', startConnecting_controller.lead_send_salesforce)

module.exports = router