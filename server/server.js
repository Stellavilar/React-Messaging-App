const express = require('express');
const app = express();
const server = require('http').Server(app);

const PORT = 5000;

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["*"],
        allowedHeaders: ["*"],
        allowedOrigins: ["*"],
    }
});

app.use(express.static(__dirname + '/../client/build'));

io.on('connection', socket => {
    //When connect to the socket, pass the id of the user:
    const id = socket.handshake.query.id;
    //Allows to keep the id even if we refresh the page:
    socket.join(id);

    socket.on('send-message', ({ recipients, text }) => {
        //Loop into the recipient 
        recipients.forEach(recipient => {
            const newRecipients = recipients.filter(r => r !== recipient );
            newRecipients.push(id);
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text
            });
        });
    });
});
server.listen(PORT, () => {
    console.log('Connected to port:' + PORT);
});