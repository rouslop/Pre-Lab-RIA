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
  public cantidad: number;
  constructor(
    // public producto: FormGroup,    
    private _fb: FormBuilder
    ) {this.cantidad = 0; }


  product = this._fb.group({
  name: ["", Validators.required],
  dir: ["", Validators.required],
  precio: ["",[ Validators.required,Validators.min(0),]]
  });


  ngOnInit(): void {
  }

  enviar(){
      let form = this.product.value;
      let nombre = form.name;
      let direcsion = form.dir;
      let precio = form.precio;
      let produc = new producto(nombre,direcsion,precio);
      localStorage.setItem(`producto ${this.cantidad}`, JSON.stringify(produc));
      this.cantidad +=1
  }

  getProductos() {
    let ret = []
    for (let i = 0; i <= this.cantidad; i++) {
        let aux = window.localStorage.getItem(`produc ${i}`)
        if (typeof aux === "string") {
            let produc = JSON.parse(aux)
           ret.push(new producto(produc.nombre, produc.descripcion, produc.precio /*,produc.img*/))
        }
    }
    return ret
}

}

