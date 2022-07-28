import {CarritoDao} from '../daos/index.js'

export const postCarrito = async (req, res)=>{
    const elemento = await CarritoDao.newCart()
    res.json(elemento)
}

export const verCarrito = async (req, res) => {
    const id = req.params.id
    const elemento = await CarritoDao.getById(id)
    if(!elemento.length){return res.status(404).json({error: "Carrito no encontrado"})}
    res.json(elemento)
}
export const deleteCarrito = async (req, res) => {
    const id = req.params.id
    const elemento = await CarritoDao.getById(id)
    if(!elemento.length){return res.status(404).json({error: "Carrito no encontrado"})}
    await CarritoDao.deleteCartById(id)
    res.json(await CarritoDao.getAll())
}
