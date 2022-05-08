import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from './clase/Cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  public cantidadC: number;
  constructor(
    private _fb: FormBuilder) {this.cantidadC = 0; }

  form = this._fb.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    cedula: ["", [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(9)
    ]],
    telefono: ["", [
      Validators.required,
      Validators.maxLength(9),
      Validators.minLength(8)
    ]],
    direccion: ["", Validators.required],
    fechaNac: ["", Validators.required]
  });

  ngOnInit(): void {
  }

  enviar(){
    let formulario = this.form.value;
      let Cli = { 
        nombre : formulario.nombre,
        apellido : formulario.apellido,
        cedula : formulario.cedula,
        telefono : formulario.telefono,
        fecha : formulario.fecha, //revisar porqué trae undefined
        direccion : formulario.direccion
     }
      localStorage.setItem(`cliente ` + this.cantidadC, JSON.stringify(Cli));
      console.log( localStorage.getItem(`cliente ` +  this.cantidadC));
      this.cantidadC = this.cantidadC  + 1;
      window.localStorage.setItem('cantidadC',this.cantidadC.toString())
      this.alert();
  }

  alert(): void {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El cliente ha sido ingresado con éxito',
      showConfirmButton: false,
      timer: 1000,
    })
  }

  error(): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salió mal',
    })
  }
}
