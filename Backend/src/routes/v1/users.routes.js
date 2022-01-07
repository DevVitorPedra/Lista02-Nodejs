const express = require('express')
const xlsx = require('xlsx')
const file = './src/routes/v1/document.xlsx'
const fileSystem = require('fs')
const multer = require('multer')
const {getData} = require('../../services/services')
const { createOrUpdateData } = require('../../services/services')
const usersController = require('../../controllers/usersController')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cd)  => {
        cd(null,file.originalname)
    }
})
const upload = multer({storage})
const usersRoutes = express.Router()


usersRoutes.get('/users',usersController.getUsers)
usersRoutes.get('/users/:id',usersController.getUserById)
usersRoutes.post('/users/users',upload.single('file'),usersController.createUsersByXLSXFile)
module.exports = usersRoutes

