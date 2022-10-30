import Producto from "../models/producto";


export const listarProductos =  async(req, res)=>{
    try {
        //buscar los productos  
        const productos = await Producto.find()
        //responder al frontend con el arreglo de productos
        res.status(200).json(productos)


    } catch (error) {
        console.log(error);
        //enviar una respuesta al frontend
        res.status(404).json({
            mensaje:'Error al buscar los productos'
        })
    }
}
export const obtenerProductos =  async(req, res)=>{
    try {
       
        //obtener el parametro
        const id = req.params.id;
        //buscar en la base de datos el producto que coincide con el parametro
        const producto = await Producto.findById(id)
        //responder el frontend
        res.status(200).json(producto)
    } catch (error) {
        console.log(error);
        //enviar una respuesta al frontend
        res.status(404).json({
            mensaje:'Error al buscar el producto'
        })
    }
}
export const editarProductos =  async(req, res)=>{
    try {
        
        //obtener el parametro
        //obtener los datos del body validados
        //actualizar el producto en la base de datos

        await Producto.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            mensaje:'Producto editado correctamente'
        })

    } catch (error) {
        console.log(error);

        res.status(400).json({
            mensaje:'Error al intentar editar un producto'
        })
    }
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