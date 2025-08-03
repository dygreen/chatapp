const userController = require('../Controllers/user.controller')

module.exports = function (io) {
    // 들어주는 역할
    io.on('connection', async (socket) => {
        console.log('client is connected', socket.id)

        socket.on('login', async (userName, cb) => {
            // 유저 정보 저장
            try {
                const user = await userController.saveUser(userName, socket.id)
                cb({ ok: true, data: user })
            } catch (e) {
                cb({ ok: false, error: e.message })
            }
        })

        socket.on('disconnect', () => {
            console.log('user is disconnected')
        })
    })
}
