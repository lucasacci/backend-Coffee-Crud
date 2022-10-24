import { Router } from "express";
import { crearProductos, listarProductos } from "../controllers/productos.controllers";

//instanciar el router

const router = Router();

// app.get('/',(req, res)=>{
//     res.send('Hola desde el backend en la peticion gets')
// });


router.route('/productos').get(listarProductos).post(crearProductos)

export default router;