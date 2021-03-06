const express =require("express")
const eventController = require('../../controllers/eventsController')
const eventsRoutes = express.Router()

eventsRoutes.get('/events/data',eventController.getEventsAfter)
eventsRoutes.get('/events',eventController.getEvents)
eventsRoutes.get('/events/:id',eventController.getEvent)
eventsRoutes.get('/events/users/:id',eventController.getEventByUserId)
eventsRoutes.post('/events',eventController.createNewEvent)
eventsRoutes.patch('/events/:id',eventController.updateEvent)
eventsRoutes.delete('/events/:id',eventController.deleteEvent)
module.exports = eventsRoutes