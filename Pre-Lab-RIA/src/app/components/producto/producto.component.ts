import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import{producto}from "./producto"


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {  
  
  constructor(
    public producto: FormGroup,    
    private _fb: FormBuilder
    ) { }

  createForm(){
    this.producto = this._fb.group({
      name: ["", Validators.required],
      dir: ["", Validators.required],
      precio: ["",[ Validators.required,Validators.min(0),]]
    });
  }

  enviar(){
    if(this.producto.valid){
      let name = this.producto.get('name')?.value;
      let dir = this.producto.get('dir')?.value;
      let precio = this.producto.get('precio')?.value;
      let product = new producto(name,dir,precio);
      localStorage.setItem(name, producto.toString());
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

  
  

}
