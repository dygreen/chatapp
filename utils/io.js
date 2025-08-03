module.exports = function (io) {
    // 들어주는 역할
    io.on('connection', async (socket) => {
        console.log('client is connected', socket.id)
    })
}
