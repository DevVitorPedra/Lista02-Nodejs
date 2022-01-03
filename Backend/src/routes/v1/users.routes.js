const express = require('express')

const fileSystem = require('fs')

const usersRoutes = express.Router()


usersRoutes.get('/users',(req,res)=>{
    if(fileSystem.lstatSync('src/database/'+'users.json').isFile()){
        const result = JSON.parse(fileSystem.readFileSync('src/database/'+'users.json','utf8'))
        res.status(200).send(result)
    }
    res.status(500).send({message:"Internal server error"})
})
module.exports = usersRoutes