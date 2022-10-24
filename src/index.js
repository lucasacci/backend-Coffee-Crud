import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path  from 'path';
// llamar a la coneccion de base de datos
import './database'

//crear una instancia de express
const app = express();

//configurar un puerto

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto ' + app.get('port'));
})


//middlewares: son funciones que se ejecutan antes de llegar a las rutas
app.use(cors()); // cors permite peticiones remotas 


// permite recibir y usar objetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true})); 


//informacion extra 
app.use(morgan('dev'))

//cargar un archivo estatico
 app.use(express.static(path.join(__dirname,'../public/index.html')))
console.log(path.join(__dirname,'../public/index.html'))


// rutas: 

app.get('/',(req, res)=>{
    res.send('Hola desde el backend en la peticion gets')
});


