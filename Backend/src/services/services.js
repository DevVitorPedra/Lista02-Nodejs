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
module.exports = {
    getData,
    createOrUpdateData,
    findById
}