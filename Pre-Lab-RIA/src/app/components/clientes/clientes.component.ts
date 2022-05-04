import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from './clase/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  constructor(
    private _fb: FormBuilder) { }

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
      localStorage.setItem(ci.value, JSON.stringify(client));
  }

}
