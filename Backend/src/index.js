const  express  = require("express")
const cors = require('cors')
const dotenv = require('dotenv')
const usersRoutes = require("./routes/v1/users.routes.js")
const eventsRoutes = require("./routes/v1/events.routes.js")
dotenv.config()
const port = process.env.PORT || 3333
const app = express()
app.use(cors())
app.use(express.json())
app.use(usersRoutes)
app.use(eventsRoutes)

app.get('/status',(req,res)=>{
    res.status(200).send({message:`rodando gostosinho na porta ${port}`})
})
app.listen(port,()=>{
    console.log(`Rodando na porta ${port}`)
})