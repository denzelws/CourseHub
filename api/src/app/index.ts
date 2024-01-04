import express from 'express'
import routes from './routes'
import corsMiddleware from './middlewares/cors'

const app = express()
app.use(express.json())
app.use(corsMiddleware)
app.use(routes)

const env = 3000
app.listen(env, () => {
    console.log(`🔥 Server started at http://localhost:${env}`)
})
