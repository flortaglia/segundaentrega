import ContenedorFirebase from "../../contenedores/contenedorFirebase.js";

class ProductoDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("productos");
  }

  async update(id, title, description, code, price, thumbnail, stock){
    const doc = this.collection.doc(id)
    doc.title= await doc.update({title})
    doc.price=await doc.update({price})
    doc.thumbnail=await doc.update({thumbnail})
    doc.description=await doc.update({description})
    doc.code=await doc.update({code})
    doc.stock=await doc.update({stock})
    doc.timestamp= Date.now()
   
    console.log(this.collection)        
  }
  async newProduct(title, description, code, price, thumbnail, stock){
    const doc = this.collection.doc()
    await doc.create({title, description, code, price, thumbnail, stock,timestamp:Date.now()})  
    console.log(this.collection)        
  }

}

export default ProductoDaoFirebase;