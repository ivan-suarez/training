const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const {connect, publishMessage, consumeMessage} = require('./rabbitmq')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const PORT = process.env.PORT || 3000
const RABBITMQ_QUEUE = 'chat_messages'

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection', (socket) =>{
    console.log('a user connected')

    socket.on('chat message', async(msg)=>{
        const channel = await connect()
        publishMessage(channel, RABBITMQ_QUEUE, msg)
    })

    socket.on('disconnect', ()=>{
        console.log('user disconnected')
    })
})

const startConsumer = async()=>{
    const channel = await connect()
    consumeMessage(channel, RABBITMQ_QUEUE, (message)=>{
        io.emit('chat message', message)
    })
}

startConsumer().then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}).catch((error)=>{
    console.error('error starting rabbitmq consumer: ', error)
})