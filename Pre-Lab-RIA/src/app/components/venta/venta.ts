import{producto}from "../producto/producto"
import{Cliente}from "../clientes/clase/Cliente"

export class venta {
    client: Cliente;
    fecha: string;
    produc: producto;
    
  constructor(c:Cliente, dir:string, p:producto) {
      this.client = c;
      this.fecha = dir;
      this.produc = p;
  }

  toString(): string{
    let res = 
    "Venta:  Clente: "+ this.client.toString+
    "Fecha: "+ this.fecha+
    "Producto: "+ this.produc.toString
    return res;
}

}