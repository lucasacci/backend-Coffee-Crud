import { Router } from "express";
import { crearProductos, listarProductos, obtenerProductos } from "../controllers/productos.controllers";

//instanciar el router

const router = Router();

// app.get('/',(req, res)=>{
//     res.send('Hola desde el backend en la peticion gets')
// });


router.route('/productos').get(listarProductos).post(crearProductos)
router.route('/productos/:id').get(obtenerProductos)


export default router;