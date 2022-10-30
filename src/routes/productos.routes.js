import { Router } from "express";
import {
  borrarProductos,
  crearProductos,
  editarProductos,
  listarProductos,
  obtenerProductos,
} from "../controllers/productos.controllers";

//instanciar el router

const router = Router();

// app.get('/',(req, res)=>{
//     res.send('Hola desde el backend en la peticion gets')
// });

router.route("/productos").get(listarProductos).post(crearProductos);
router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put(editarProductos)
  .delete(borrarProductos);

export default router;
