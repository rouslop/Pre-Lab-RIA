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
    // public producto: FormGroup,    
    private _fb: FormBuilder
    ) { }


  product = this._fb.group({
  name: ["", Validators.required],
  dir: ["", Validators.required],
  precio: ["",[ Validators.required,Validators.min(0),]]
  });


  ngOnInit(): void {
  }

  enviar(){
    if(this.product.valid){
      let name = this.product.get('name')?.value;
      let dir = this.product.get('dir')?.value;
      let precio = this.product.get('precio')?.value;
      let produc = new producto(name,dir,precio);
      localStorage.setItem(name, producto.toString());
    }
  }
}
