import ContenedorFirebase from "../../contenedores/contenedorFirebase";

class CarritoDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("carritos");
  }
  async newCart(){
    const doc = this.collection.doc()
    await doc.create({timestamp:Date.now(), products:[]})
 
    console.log(this.collection)        
  }

  
}

export default CarritoDaoFirebase;