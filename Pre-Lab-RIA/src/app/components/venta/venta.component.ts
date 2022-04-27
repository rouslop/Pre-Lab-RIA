import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup, 
  Validators 
} from '@angular/forms';
import {venta} from "./venta"


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  
  constructor(
    public venta: FormGroup,
    private _fb: FormBuilder
    ) { }

  createForm(){
    this.venta = this._fb.group({
      name: ["", Validators.required],
      fecha: ["", Validators.required],
      precio: ["",[ Validators.required,Validators.min(0),]]
    });
  }

  enviar(){
    if(this.venta.valid){
      let producto = this.venta.get('producto')?.value;
      let fecha = this.venta.get('fecha')?.value;
      let cliente = this.venta.get('cliente')?.value;
      let vent = new venta(producto,fecha,cliente);
      /*localStorage.setItem(vent.toString(), vent.toString());*/
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

}
