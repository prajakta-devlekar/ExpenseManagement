const { Module } = require('module')
const mongoose=require('mongoose')
const colors=require('colors')

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server running on ${mongoose.connection.host}`.bgMagenta);
        
    } catch (error) {
        console.log(`${error}`.bgRed);
    }00
}

module.exports=connectDb;