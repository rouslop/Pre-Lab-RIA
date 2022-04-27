export class producto {
    nombre: string;
    direccion: string;
    precio: string;
    //img: string;
  
  constructor(n:string, dir:string, p:string,/*im:string*/) {
  
      this.nombre = n;
      this.direccion = dir;
      this.precio = p;
      //this.img = im;
  }

  toString(): string{
    let res = 
    "Producto:  Nombre: "+ this.nombre+
    "Dirección: "+ this.direccion+
    " Precio "+ this.precio
    return res;
}

}
  