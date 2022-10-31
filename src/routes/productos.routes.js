import { Router } from "express";
import {
  borrarProductos,
  crearProductos,
  editarProductos,
  listarProductos,
  obtenerProductos,
} from "../controllers/productos.controllers";

import { check } from "express-validator";

//instanciar el router

const router = Router();

// app.get('/',(req, res)=>{
//     res.send('Hola desde el backend en la peticion gets')
// });

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto", "El nombre del producto es obligatorio")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("El producto debe tener entre 2 y 50 caracteres"),
      check("precio", "El precio del producto es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("El precio debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 1000) {
            return true;
          } else {
            throw new Error(
              "El precio debe ser mayor a 1 y menor o igual a 1000"
            );
          }
        }),
      check("imagen")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("debe enviar una URL valida"),
      check("categoria").isIn([
        "bebida-caliente",
        "bebida-fria",
        "dulce",
        "salado",
      ])
      .withMessage('La categoria debe ser valida')
    ],
    crearProductos
  );

router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put(editarProductos)
  .delete(borrarProductos);

export default router;
