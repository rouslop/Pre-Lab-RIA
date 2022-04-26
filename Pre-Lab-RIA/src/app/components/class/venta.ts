import{producto}from "./producto"
import{cliente}from "./cliente"

export class venta {
    client: cliente; //cliente
    fecha: string;
    produc: producto;
    
  constructor(c:cliente, dir:string, p:producto) {
  
      this.client = c;
      this.fecha = dir;
      this.produc = p;
  }}