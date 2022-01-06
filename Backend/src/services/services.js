const fileSystem = require('fs')
function getData(filename){
    const result = JSON.parse(fileSystem.readFileSync('src/database/'+ filename ,'utf8'))
    return result
}
function createOrUpdateData(filename, data){
    fileSystem.writeFileSync('src/database/'+ filename, JSON.stringify(data))
}
function findById(id, data) {
    const item = data.find((current)=> current.id === Number(id))
    return item
}
function formatDate(date){
    const newDate = new Date(date)
    const options = {year:'numeric', month:'numeric',day:'numeric'}
    const day = newDate.toLocaleString(newDate,options)
    return day
}
module.exports = {
    getData,
    createOrUpdateData,
    findById,
    formatDate
}


/**[
    {
        "id": 1,
        "name": "Pedro",
        "age": 25,
        "job": "Developer",
        "state": "Santa Catarina"
    },
    {
        "id": 2,
        "name": "José",
        "age": 32,
        "job": "Product Manager",
        "state": "Rio Grande do Norte"
    },
    {
        "id": 3,
        "name": "Aderbal",
        "age": 18,
        "job": "Intern",
        "state": "São Paulo"
    },
    {
        "id": 4,
        "name": "Danilo",
        "age": 23,
        "job": "Developer",
        "state": "Santa Catarina"
    },
    {
        "id": 5,
        "name": "Luisa",
        "age": 31,
        "job": "UX Designer",
        "state": "Santa Catarina"
    },
    {
        "id": 6,
        "name": "Vitoria",
        "age": 35,
        "job": "Tech Lead",
        "state": "Rio Grande do Sul"
    }
] */