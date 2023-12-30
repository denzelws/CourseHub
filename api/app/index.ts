import express from 'express'

const app = express()
const env = 3000
app.listen(env, () => {
    console.log(`🔥 Server started at http://localhost:${env}`)
})
