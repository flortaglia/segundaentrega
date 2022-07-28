import {ProductoDao} from '../daos/index.js'



export const getProductos = async (req, res) => {
    const verProductos = await ProductoDao.getAll()
    res.json(verProductos)
}

export const postProductos = async (req, res) => {
    const {title, description, code, price, thumbnail, stock} = req.body 
    console.log(ProductoDao)
    const elemento = await ProductoDao.newProduct(title, description, code, price, thumbnail, stock)
    res.json(elemento)
    // res.redirect('/api/productos')
    // res.statusCode=201
}
export const getProductoId = async (req, res) => {
    const id = req.params.id
    const elemento = await ProductoDao.getById(id)
    if(!elemento.length){return res.status(404).json({error: "Producto no encontrado"})}
    res.json(elemento)
}
export const putProduct = async (req, res) => {
    const {title, description, code, price, thumbnail, timestamp, stock} = req.body
    const id = req.params.id
    const elemento = await ProductoDao.getById(id)
    if(!elemento.length){return res.status(404).json({error: "Producto no encontrado"})}
    const elementChanged = await ProductoDao.update(id,title, description, code, price, thumbnail, timestamp, stock)
    res.json(elementChanged)
    
}
export const deleteProduct = async (req, res) => {
    const id = req.params.id
    if(!id){return res.json({ error: "El parámetro no es un número o el id no existe" })}
    await ProductoDao.deleteById(id)
    res.json(await ProductoDao.getAll())
}
// const mostrarForm =(req,res)=>{
//     res.render('form.hbs')
// }


