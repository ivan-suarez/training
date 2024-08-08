const amqp = require('amqplib')

async function sendMessage(){
    try{
        const connection = await amqp.connect("amqp://localhost")
        const channel = await connection.createChannel();
        const queue = "hello"
        const message = "Hello world"

        await channel.assertQueue(queue, {durable: false})
        channel.sendToQueue(queue, Buffer.from(message))

        console.log("[x] sent '%s' ", message)

        setTimeout(()=>{
            connection.close()
            process.exit(0)
        }, 500)

    }catch(error){
        console.error("Error:", error)
    }
}

sendMessage()