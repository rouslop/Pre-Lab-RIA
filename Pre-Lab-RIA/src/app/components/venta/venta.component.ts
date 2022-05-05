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
  public cantidad: number;
  constructor(
   
    private _fb: FormBuilder
    ) {this.cantidad = 0; }

    venta = this._fb.group({
      name: ["", Validators.required],
      fecha: ["", Validators.required],
      precio: ["",[ Validators.required,Validators.min(0),]]
    });
  
  enviar(){
    if(this.venta.valid){
      let producto = this.venta.get('producto')?.value;
      //buscar producto
      let fecha = this.venta.get('fecha')?.value;
      let cliente = this.venta.get('cliente')?.value;
      //buscar cliente
      let vent = new venta(producto,fecha,cliente);
      localStorage.setItem(`producto ${this.cantidad}`, JSON.stringify(vent));
      this.cantidad +=1
    }
  }

  getVentas() {
    let ret = []
    for (let i = 0; i <= this.cantidad; i++) {
        let aux = window.localStorage.getItem(`produc ${i}`)
        if (typeof aux === "string") {
            let venta = JSON.parse(aux)
           ret.push(new venta(venta.cliente, venta.fecha,venta.producto))
        }
    }
    return ret
}


  ngOnInit(): void {
  }

}
