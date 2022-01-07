const fileSystem = require('fs')
const xlsx = require('xlsx')
const { getData, createOrUpdateData, findById } = require('../services/services')
function getUsers(req,res) { 

    if(fileSystem.lstatSync('src/database/'+'users.json').isFile()){
        const result = JSON.parse(fileSystem.readFileSync('src/database/'+'users.json','utf8'))
        res.status(200).send(result)
    }
    res.status(500).send({message:"Internal server error"})
}
function getUserById(req,res) {
    const { id } = req.params
    const usersData = getData('users.json')
    try {
        const user = findById(id,usersData)
        if(!user) throw new Error('ID inexistente')
        res.status(200).send({message:user})
        
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}
async function createUsersByXLSXFile(req, res) {
    const workbook = await xlsx.read(fileSystem.readFileSync('./uploads/' + req.file.originalname))
    let worksheet = workbook.Sheets[workbook.SheetNames[0]]
    let data = []
    let usersId = getData('users.json').length
    try {
        if (worksheet['A1'].v !== 'name' || worksheet['B1'].v !== 'age' || worksheet['C1'].v !== 'job' || worksheet['D1'].v !== 'state') throw new Error('A planilha deve conter as colunas name, age, job, state')
        for (let i = 2; i < 6; i++) {
            const name = worksheet[`A${i}`].v
            const age = worksheet[`B${i}`].v
            const job = worksheet[`C${i}`].v
            const state = worksheet[`D${i}`].v
            data.push({
                id: usersId + 1,
                name: name ? name : '',
                age: age ? age : '',
                job: job ? job : '',
                state: state ? state : ''
            })
            usersId++
        }
        let usersData = getData('users.json')
        usersData = usersData.concat(data)
        createOrUpdateData('users.json', usersData)
        
        res.status(201).send({ message: 'Usuários criados com sucesso' })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = {
    createUsersByXLSXFile,
    getUserById,
    getUsers
}