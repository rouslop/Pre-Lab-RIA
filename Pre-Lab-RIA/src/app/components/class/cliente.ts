export class cliente {
    cedula: number;
    nombre: string;
    apellido: string;
    telefono: number;
    direccion: string;
    fechaNac: string;
      
  
  constructor(n:string, a:string, ci:number, tel:number, dir:string, f:string) {
      this.apellido = a;
      this.cedula = ci;
      this.nombre = n;
      this.telefono = tel;
      this.direccion = dir;
      this.fechaNac = f;
  }}