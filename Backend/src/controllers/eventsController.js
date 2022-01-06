const fileSystem = require('fs')
const { getData, createOrUpdateData, findById, formatDate } = require('../services/services')
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
    try {
        
        const eventsData = getData('events.json')
        const userData = getData('users.json')
        const contains = []
        for(let j = 0; j<eventsData.length; j++){
            for(let i = 0; i < eventsData[j].guests.length; i++){
                if(eventsData[j].guests[i].id == Number(id)){
                    contains.push(eventsData[j])
                }
            }
        }
        if(contains=='') return res.status(200).send({message:"Nenhum evento para este usuário"})
        const user = findById(id,userData)
        contains.push(user)
       console.log(contains)
        res.status(200).send({message:contains})
    } catch (error) {
        res.status(404).send({message:error.message})
    }
}
function createNewEvent(req,res) {
    const { id, name, description, date, eventPlace, guests, owner } = req.body
    try {
        const newDate = new Date(date)
        const day = newDate.getDay()
        const month = newDate.getMonth()
        const year = newDate.getFullYear()
        //validations
        if(!day || !month || !year) throw new Error('A data deve ser informada no formato mm/dd/aaaa, mês/dia/ano')
        if(!id || !name || !description || !date || !eventPlace || !guests || !owner) throw new Error('Todos os campos devem ser preenchidos')
        if(typeof(id)!=='number') throw new Error("O Id deve ser um número")
       
        //creating the event object
       const guestsId = guests.map(item=>{ return {id:item}})
        const event = {
            id: id,
            name: name,
            description: description,
            date: date,
            eventPlace: eventPlace,
            guests: guestsId,
            owner: {id:owner}
        }

            //inserting data in database
           const data = getData('events.json')
           data.push(event)
           createOrUpdateData('events.json',data) 
           
            res.status(200).send({message:'passou'})
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}
module.exports = {
    getEvents,
    getEventsAfter,
    updateEvent,
    deleteEvent,
    getEventByUserId,
    createNewEvent
}

/**  if(!id || !name || !description || !date || !eventPlace || !guests || !owner) throw new Error('Todos os campos devem ser preenchidos')
        if(typeof(id)!=='number') throw new Error("O Id deve ser um número")
       
       const guestsId = guests.map(item=>{ return {id:item}})
        const event = {
            id: id,
            name: name,
            description: description,
            date: date,
            eventPlace: eventPlace,
            guests: guestsId,
            owner: {id:owner}
        }
           const data = getData('events.json')
           data.push(event)
           createOrUpdateData('events.json',data) */