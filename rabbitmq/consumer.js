const amqp = require('amqplib')

async function receiveMessages(){
    try{
        const connection = await amqp.connect('amqp://localhost')
        const channel = await connection.createChannel()
        const queue = "hello"

        await channel.assertQueue(queue, {durable:false})

        console.log("[*] waiting for messages in %s. To exit press CTRL+C", queue)

        channel.consume(queue, (msg)=>{
            console.log("[x] received '%s'", msg.content.toString())
        },{noAck: true} )
    }catch(error){
        console.error("Error:", error)
    }
    
}

receiveMessages()