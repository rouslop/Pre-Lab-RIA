export class Cliente {
    cedula: string;
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;
    fechaNac: string;
      
  
  constructor(n:string, a:string, ci:string, tel:string, dir:string, f:string) {
      this.apellido = a;
      this.cedula = ci;
      this.nombre = n;
      this.telefono = tel;
      this.direccion = dir;
      this.fechaNac = f;
  }

  toString(): string{
        let res = "Cliente[Cedula: "+this.cedula.toString()+" Nombre: "+
        this.nombre+" Apellido: "+ this.apellido+" Telefono: "+ this.telefono.toString()+
        "Dirección: "+ this.direccion+" Fecha de nacimiento: "+ this.fechaNac+" ]"
        return res;
    }

}