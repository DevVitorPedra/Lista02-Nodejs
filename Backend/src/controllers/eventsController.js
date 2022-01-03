const fileSystem = require('fs')
const result = JSON.parse(fileSystem.readFileSync('src/database/' + 'events.json', 'utf8'))

function getEvents(req, res) {
    const {data} = req.query
   
    const newDate = new Date(data)
    
    try {
        if (data) {

            const filtered = result.filter((item) => {
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
            res.status(200).send({ message: result })
        }

    } catch (error) {
        res.status(404).send({ message: error.message })
    }

}
function getEventsAfter(req,res){
    const {data} = req.query
    const newDate = new Date(data)
   
    try {
        const filtered = result.filter((item)=>{
            const currentDate = new Date(item.date)
            if(currentDate.getTime() >= newDate.getTime()){
                console.log('currentDate',currentDate)
                return item
            }
        })
        res.status(200).send({message:filtered})
    } catch (error) {
        res.status(404).send({message:'Nenhum evento após essa data'})
    }

}
module.exports = {
    getEvents,
    getEventsAfter
}

