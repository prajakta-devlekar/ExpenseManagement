const express =require("express")
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const connectDb = require("./config/connectDb")

const app=express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//config dotenv file
dotenv.config()
connectDb()

//database call


//routes
//user routes
app.use('/api/v1/users', require('./routes/userRoute'))
//transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoutes'))
//port
const PORT=8080 || process.env.PORT;

//listen
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})
