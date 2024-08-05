Chat Application:

    Objective: Develop a simple chat application where users can send and receive messages in real-time.
    Tasks:
        Set up RabbitMQ for message brokering.
        Create a frontend with a basic chat interface (using HTML, CSS, JavaScript).
        Implement backend services (using Node.js, Python, or another language) to handle message sending and receiving.
    Features: Real-time messaging, user authentication, chat rooms.


docker pull rabbitmq:3-management
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management


Access RabbitMQ Management UI: Open your web browser and go to http://localhost:15672. The default username and password are both guest.