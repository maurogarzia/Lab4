const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const taskRoutes = require('./src/routes/task') 
const sprintRoutes = require('./src/routes/sprints') 
const backlogRoutes = require('./src/routes/backlog')

dotenv.config()

const app = express()
app.use(bodyParser.json())

// Conexion a mongo
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log('Conectado'))
.catch((error) => console.error('Error al conectar', error.message))

const port = process.env.PORT || 3000
app.use('/tasks', taskRoutes)
app.use('/sprints', sprintRoutes)
app.use('/backlog', backlogRoutes)

app.listen(port, () => {
    console.log(`Servidor iniciando en el puerto ${port}`);
})