const amqp = require('amqplib')

const connect = async () => {
    try{
        const connection = await amqp.connect('amqp://localhost')
        const channel = await connection.createChannel()
        return channel

    }catch(error){
        console.error('Error connecting to rabbitmq:', error)
    }
} 

const publishMessage = async(channel, queue, message) =>{
    await channel.assertQueue(queue, {durable: false})
    channel.sendToQueue(queue, Buffer.from(message))
}

const consumeMessage = async (channel, queue, callback) =>{
    await channel.assertQueue(queue, {durable: false})
    channel.consume(queue, (msg) =>{
        if(msg !== null){
            callback(msg.content.toString())
            channel.ack(msg)
        }
    })
}

module.exports ={connect, publishMessage, consumeMessage} 