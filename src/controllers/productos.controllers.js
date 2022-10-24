

export const listarProductos =  (req, res)=>{
    res.send('Hola desde el backend en la peticion get')
}

export const crearProductos =  (req, res)=>{

    console.log(req.body)
    res.send('Hola aqui tengo que crear un producto')
}