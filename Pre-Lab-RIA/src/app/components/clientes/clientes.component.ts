import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { allowedNodeEnvironmentFlags } from 'process';
import { cliente } from '../class/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  constructor(
    public form: FormGroup,
    private _fb: FormBuilder) { }

  createForm(){
    this.form = this._fb.group({
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
  }

  ngOnInit(): void {
    this.createForm();
  }

  enviar(){
    if(this.form.valid){
      let n = this.form.get('nombre')?.value;
      let a = this.form.get('apellido')?.value;
      let ci = this.form.get('cedula')?.value;
      let tel = this.form.get('telefono')?.value;
      let fecha = this.form.get('fechaNac')?.value;
      let dir = this.form.get('direccion')?.value;

      let client = new cliente(n,a,ci,tel,dir,fecha);
      localStorage.setItem(ci, cliente.toString());
      
    }
  }

}

console.log(localStorage.getItem('ci'));
