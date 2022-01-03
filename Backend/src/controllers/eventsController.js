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
    console.log(newDate.toLocaleString()>=newDate.toLocaleString())
    try {
        const filtered = result.filter((item)=>{
            if(item.date.toLocaleString()<=newDate.toLocaleString()){
                console.log(newDate.toLocaleString(),item.date.toLocaleString())
                return item
            }
        })
        res.status(200).send({message:filtered})
    } catch (error) {
        
    }

}
module.exports = {
    getEvents,
    getEventsAfter
}

