import express from 'express'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)

const env = 3000
app.listen(env, () => {
    console.log(`🔥 Server started at http://localhost:${env}`)
})
