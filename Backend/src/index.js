const  express  = require("express")
const usersRoutes = require("./routes/v1/users.routes.js")
const eventsRoutes = require("./routes/v1/events.routes.js")
const port = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(usersRoutes)
app.use(eventsRoutes)

app.get('/status',(req,res)=>{
    res.status(200).send({message:`rodando gostosinho na porta ${port}`})
})
app.listen(port,()=>{
    console.log("System verification")
    setTimeout(() => {
        console.log("Checking credentials")
    }, 2000);
    setTimeout(() => {
        console.log("Loading informations")
    }, 3000);
    setTimeout(() => {
        console.log(`System running on port ${port}`)
    }, 4000);
})