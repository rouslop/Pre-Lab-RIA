export class producto {
    nombre: string;
    descripcion: string;
    precio: string;
    img: string;
  
  constructor(n:string, dir:string, p:string,im:string) {
  
      this.nombre = n;
      this.descripcion = dir;
      this.precio = p;
      this.img = im;
  }
  getNombre() {
    return this.nombre
}
getDescripcion() {
    return this.descripcion
}
getPrecio(){
    return this.precio
}
getImagen(){
   return this.img
}

  toString(): string{
    let res = 
    "Producto:  Nombre: "+ this.nombre+
    "  Dirección: "+ this.descripcion+
    "   Precio "+ this.precio
    return res;
}

}
  