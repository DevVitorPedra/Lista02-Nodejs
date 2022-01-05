const express = require('express')
const xlsx = require('xlsx')
const file = './src/routes/v1/document.xlsx'
const fileSystem = require('fs')
const multer = require('multer')
const upload = multer({dest:'./backend/src/database'})

const usersRoutes = express.Router()


usersRoutes.get('/users',(req,res)=>{
    if(fileSystem.lstatSync('src/database/'+'users.json').isFile()){
        const result = JSON.parse(fileSystem.readFileSync('src/database/'+'users.json','utf8'))
        res.status(200).send(result)
    }
    res.status(500).send({message:"Internal server error"})
})
usersRoutes.post('/users/users',upload.single('file'), async(req,res)=>{
    
     const receivedFile = req.file
     const  workbook = xlsx.readFile(wb)
     let worksheet = workbook.Sheets[workbook.SheetNames[0]]
     let data = []
     for(let i = 2; i <6; i++){
         const name = worksheet[`A${i}`].v
         const age = worksheet[`B${i}`].v
         const job = worksheet[`C${i}`].v
         const state = worksheet[`D${i}`].v
        data.push({
            name:name,
            age:age,
            job:job,
            state:state
        })
     }
      console.log(data)
        res.status(200).send({message:data})
})
module.exports = usersRoutes