import Producto from "../models/producto";


export const listarProductos =  (req, res)=>{
    res.send('Hola desde el backend en la peticion get')
}

export const crearProductos = async (req, res)=>{

    try {
        console.log(req.body);
        // validar datos de objeto
            const productoNuevo = new Producto(req.body)
        //guardar el objeto en base de datos
            await productoNuevo.save();

        res.status(201).json({
            mensaje: 'El producto fue creado correctamente',
        })


    } catch (error) {
        console.log(error);

        res.status(404).json({
            mensaje: 'ERROR al intentar agregar un nuevo producto',
        })
    }

  
}