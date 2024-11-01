import express from 'express'
import { Request, Response, NextFunction } from 'express';
import studentRouter from './routes/student.route'

const app = express()

app.use(express.json())

app.use(studentRouter)

// app.use((error: CustomError, req: Request , res: Response, next: NextFunction) => {
//     console.log(error)
//     const status = error.status || 500
//     const message = error.message || "Um erro ocorreu."
//     const data = error.data
//     res.status(status).json({message, data})
// })

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
