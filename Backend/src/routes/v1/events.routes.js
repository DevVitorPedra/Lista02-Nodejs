const express =require("express")
const eventController = require('../../controllers/eventsController')
const eventsRoutes = express.Router()

eventsRoutes.get('/events',eventController.getEvents)
eventsRoutes.get('/events/data',eventController.getEventsAfter)
module.exports = eventsRoutes