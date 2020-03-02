
const express = require('express')
const path = require('path')
const app = express()

//config
const port = process.env.PORT || 8080
app.use(express.static(path.join(__dirname, 'public')))

//ahora preparamos las conecciones [websocket]
const server = require('http').Server(app)
const io = require('socket.io')(server) 
io.on('connection', socket => {
    console.log('nuevo cliente conectado')
    //mensaje con emit
    socket.emit('mensaje', 'bienvenido')
})  

// start the server
server.listen(port,  () => {
    console.log('Servidor Inicializado en http://localhost:8080')
    
} )