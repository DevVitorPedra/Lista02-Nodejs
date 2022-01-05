const express =require("express")
const eventController = require('../../controllers/eventsController')
const eventsRoutes = express.Router()

eventsRoutes.get('/events',eventController.getEvents)
eventsRoutes.get('/events/data',eventController.getEventsAfter)
eventsRoutes.get('/events/users/:id',eventController.getEventByUserId)
eventsRoutes.patch('/events/:id',eventController.updateEvent)
eventsRoutes.delete('/events/:id',eventController.deleteEvent)
module.exports = eventsRoutes