import express from 'express'

const app = express()
const PORT=process.env.PORT||5000
import recordingRouter from './Router/recording.js'

app.use('/api/record',recordingRouter)
app.listen(PORT,()=>console.log(`Server is Running AT ${PORT}`))