import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from './clase/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  public cantidad: number;
  constructor(
    private _fb: FormBuilder) {this.cantidad = 0; }

  form = this._fb.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    cedula: ["", [
      Validators.required,
      Validators.min(8),
      Validators.max(9)
    ]],
    telefono: ["", [
      Validators.required,
      Validators.max(9),
      Validators.min(8)
    ]],
    direccion: ["", Validators.required],
    fechaNac: ["", Validators.required]
  });


  ngOnInit(): void {
  }

  enviar(){
    let formulario = this.form.value;
      let n = formulario.nombre;
      let a = formulario.apellido;
      let ci = formulario.cedula;
      let tel = formulario.telefono;
      let fecha = formulario.fecha; //revisar porqué trae undefined
      let dir = formulario.direccion;
      let client = new Cliente(n,a,ci,tel,dir,fecha);
      localStorage.setItem(`cliente` + this.cantidad, JSON.stringify(client));
  }

  getCliente() {
    let ret = []
    for (let i = 0; i <= this.cantidad; i++) {
        let aux = window.localStorage.getItem(`cliente ${i}`)
        if (typeof aux === "string") {
            let Cliente = JSON.parse(aux)
           ret.push(new Cliente(Cliente.nombre, Cliente.apellido, Cliente.cedula,Cliente.telefono,Cliente.fecha,Cliente.direccion ))
        }
    }
    return ret
}
}
