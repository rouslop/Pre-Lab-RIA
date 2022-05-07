import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup, 
  Validators 
} from '@angular/forms';
import { Cliente } from '../clientes/clase/Cliente';
import { producto } from '../producto/producto';
import {venta} from "./venta"


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  public cantidadC: number;
  public cantidadP: number;
  public cantidadV: number;
  public clientes: [String];
  public productos: [String];
  constructor(
   
    private _fb: FormBuilder
    ) {
      this.cantidadV = 0
      let auxP = window.localStorage.getItem('cantidadP')
      let auxC = window.localStorage.getItem('cantidadC') 
      if (auxP === null) {
        this.cantidadP = 0
      } else {
        this.cantidadP = parseInt(auxP)
      }
      if (auxC === null) {
        this.cantidadC= 0
      } else {
        this.cantidadC = parseInt(auxC)
      }
      this.clientes = this.getClientes()
      this.productos = this.getProductos()
    }

    venta = this._fb.group({
      fecha: ["", Validators.required],
      cliente:["",Validators.required],
      producto:["",Validators.required]
    });
  
    
    getProductos(): [String] {
      let ret: [String]
      ret = ["Seleccione un producto"]
      for (let i = 0; i <this.cantidadP; i++) {
        let aux = window.localStorage.getItem(`producto${i}`)
        if (typeof aux === "string") {
          let produc = JSON.parse(aux)
          ret.push(produc.nombre)
          console.log(produc.nombre)
        }
      }
      console.log(ret)
      return ret
    }

    getClientes(): [String] {
      let ret: [String]
      ret = ["Seleccione un cliente"]
      for (let i = 0; i < this.cantidadC; i++) {
        let aux = window.localStorage.getItem(`cliente ${i}`)
        if (typeof aux === "string") {
          let client = JSON.parse(aux)
          ret.push(client.cedula)
          console.log(client.cedula)
        }
      }
      console.log(ret)
      return ret
    }
  enviar(){
      let form = this.venta.value;
      let P
      let product
      for (let i = 0; i <= this.cantidadP; i++) {
        let aux = window.localStorage.getItem(`producto${i}`)
        if (typeof aux === "string") {
          product = JSON.parse(aux)
          if(product.nombre === form.producto){
            P =product   
          }
        }
      }
      let C
      let cli
      for (let i = 0; i <= this.cantidadC; i++) {
        let aux = window.localStorage.getItem(`cliente ${i}` )
        if (typeof aux === "string") {
          cli = JSON.parse(aux)
          if (cli.cedula === form.cliente){
            C = cli
          }
        }
      }
      console.log(C)
      let fecha = form.fecha;
      let vent = new venta(C,fecha,P);
      localStorage.setItem(`venta ${this.cantidadV}`, JSON.stringify(vent));
      console.log( localStorage.getItem(`venta `+ this.cantidadV));
      this.cantidadV = this.cantidadV + 1
      window.localStorage.setItem('cantidadV',this.cantidadV.toString())
  }
  ngOnInit(): void {
  }
}