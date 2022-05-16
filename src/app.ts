/* istanbul ignore file */
import { errorLoggerMiddleware } from './shared/errors/errorLogger.middleware'
import { errorParserMiddleware } from './shared/errors/errorParser.middleware'
import express from 'express'
import router from './routes/routes'

const app = express()
const port = 3000

app.use(express.json())
app.use(router)
app.use(errorLoggerMiddleware)
app.use(errorParserMiddleware)
app.listen(port, () => {
    console.log(`Application is running on port ${port}.`)
})

export default app
