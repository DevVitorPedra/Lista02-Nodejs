const fileSystem = require('fs')
const { getData, createOrUpdateData, findById } = require('../services/services')
const result = JSON.parse(fileSystem.readFileSync('src/database/' + 'events.json', 'utf8'))

function getEvents(req, res) {
    const { data } = req.query
    
    const eventsData = getData('events.json')
    try {
        if (data) {

            const filtered = eventsData.filter((item) => {
                if (item.date === data) {
                    return item
                }
            })
            if (filtered.length === 0) {
                throw new Error("Data inválida")
            } else {
                res.status(200).send({ message: filtered })
            }
        } else {
            res.status(200).send({ message: eventsData })
        }

    } catch (error) {
        res.status(404).send({ message: error.message })
    }

}
function getEventsAfter(req, res) {
    const { data } = req.query
    const newDate = new Date(data)

    try {
        const filtered = result.filter((item) => {
            const currentDate = new Date(item.date)
            if (currentDate.getTime() >= newDate.getTime()) {
                console.log('currentDate', currentDate)
                return item
            }
        })
        res.status(200).send({ message: filtered })
    } catch (error) {
        res.status(404).send({ message: 'Nenhum evento após essa data' })
    }

}
function updateEvent(req, res) {
    const { id } = req.params
    const dataToUpdate = req.body
    const data = getData('events.json')

    try {
        const singleItem = data.find((item) => item.id === Number(id))
        if (!singleItem) throw new Error('Id inexistente')
        const updated = { ...singleItem, ...dataToUpdate }
        const updateJson = data.map((item) => {
            if (item.id === Number(id)) {
                return updated
            }
            return item
        })

        createOrUpdateData('events.json', updateJson)
        res.status(200).send({ message: updated })
    } catch (error) {
        res.status(404).send({ message: error.message })
    }

}
function deleteEvent(req, res) {
    const { id } = req.params
    const data = getData('events.json')
    try {
        const found = findById(id, data)
        if (!found) throw new Error('Id inexistente')
        const newDate = new Date()
        const eventDate = new Date(found.date)
        if (eventDate.getTime() < newDate.getTime()) throw new Error('Evento já ocorreu e não pode ser deletado')
        const index = data.findIndex((item) => item.id === Number(id))
        data.splice(index,1)
        createOrUpdateData('events.json',data)
        res.status(200).send({ message: data })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
function getEventByUserId(req,res) {
    const { id } = req.params
    const eventsData = getData('events.json')
    const userData = getData('users.json')
    const user = findById(id,userData)
    const filtered = eventsData.filter((item)=> {
        
    })
    res.status(200).send({message:filtered})
}
module.exports = {
    getEvents,
    getEventsAfter,
    updateEvent,
    deleteEvent,
    getEventByUserId
}

