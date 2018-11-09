import * as socketIo from 'socket.io-client'
const io = socketIo();

io.on('connect', () => {
    console.log("Connected");
});
