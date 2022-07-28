// import dotenv from "dotenv";
// dotenv.config();

let ProductoDao;
let CarritoDao;


switch (process.env.DATABASE) {
  case "firebase":
    const { default: ProductoDaoFirebase } = await import(
      "./productos/productoDaoFirebase"
    );
    const { default: CarritoDaoFirebase } = await import(
      "./carritos/carritoDaoFirebase"
    );

    ProductoDao = new ProductoDaoFirebase;
    CarritoDao = new  CarritoDaoFirebase;

    break;
  case "mongo":
    const { default: ProductoDaoMongo } = await import(
      "./productos/productoDaoMongo"
    );
    const { default: CarritoDaoMongo } = await import(
      "./carritos/carritoDaoMongo"
    );

    ProductoDao = new ProductoDaoMongo;
    CarritoDao = new CarritoDaoMongo;
 
    break;
}

export { ProductoDao, CarritoDao };