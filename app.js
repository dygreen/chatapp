const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json()) // json 요청 처리도 추가하면 좋음

const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB

if (!DB_URI) {
    console.error('❌ .env 파일에 DB 환경변수가 정의되어 있지 않습니다.')
    process.exit(1)
}

mongoose
    .connect(DB_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB')

        // ✅ 서버 실행 추가
        app.listen(PORT, () => {
            console.log(`🚀 서버 실행 중: http://localhost:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('❌ MongoDB 연결 실패:', err)
    })
