import mongoose, { mongo, Mongoose } from "mongoose";

// const url = `mongodb://localhost:27017/coffee-crud`;
const url = `mongodb+srv://usuario_cafe:eNuzb1qZ6ueV59Vd@clustercafecrud.b4skld8.mongodb.net/cafe-crud`;


mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada')
})