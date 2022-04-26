import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  public producto: FormGroup;
  constructor(private _fb: FormBuilder) { }

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
      /*let producto = new producto(name,dir,precio);*/
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

}
