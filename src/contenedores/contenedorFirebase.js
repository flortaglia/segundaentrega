import admin from "firebase-admin";
import config from "../config.js";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const db = admin.firestore();

class ContenedorFirebase {

  constructor(nombreColeccion) {
    this.collection = db.collection(nombreColeccion);
  }

  async getById(id) {
    const doc = await this.collection.doc(id).get();
    const response = doc.data();
    return response;
  }
  // async getAll(){
  //   const docSnapshot = await this.collection.get()
  //   const docs = docSnapshot.docs;

  //   const response = docs.map((doc) => ({
  //     id: doc.id,
  //     title: doc.data().title,
  //     description: doc.data().description,
  //     code:doc.data().code,
  //     price:doc.data().price,
  //     thumbnail:doc.data().thumbnail,
  //     timestamp:doc.data().timestamp,
  //     stock:doc.data().stock

  //   }));
  // }

  async getAll(){
    const docSnapshot = await this.collection.get()
    const docs = docSnapshot.docs;

    const response = docs.map((doc) =>{
      result = doc.data();
      result.id = doc.id;
      return result;
    });
    return response;
  }

  async deleteById(id){
      await this.collection.doc(id).delete();
  }
  
}
export default ContenedorFirebase;