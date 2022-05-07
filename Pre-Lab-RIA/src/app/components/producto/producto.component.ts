import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import{producto}from "./producto"
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {  
  public cantidadP: number;
  constructor(
    // public producto: FormGroup,    
    private _fb: FormBuilder
    ) {
      let auxProducto = window.localStorage.getItem('cantidadP')  
      if(auxProducto===null){
        this.cantidadP = 0
      }else{
        this.cantidadP =  parseInt(auxProducto)  
      }  
     }

  product = this._fb.group({
    name: ["", Validators.required],
    dir: ["", Validators.required],
    precio: ["",[ Validators.required,Validators.min(0),]],
    imagen: [""]
  });
  
  ngOnInit(): void {
  }
  
  enviar(){
      let form = this.product.value;
      let Pro = {
       nombre : form.name,
       descripcion : form.dir,
       precio : form.precio,
       img : form.imagen,
    }
      localStorage.setItem(`producto`+ this.cantidadP, JSON.stringify(Pro));
      console.log( localStorage.getItem(`producto`+ this.cantidadP));
      this.cantidadP =this.cantidadP + 1;
      window.localStorage.setItem('cantidadP',this.cantidadP.toString())
      this.alert();
  }

  alert(): void {
    Swal.fire({
      text: 'El producto ha sido ingresado con éxito',
      icon: 'success',
      confirmButtonText: 'Ok',
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