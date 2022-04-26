import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup, 
  Validators 
} from '@angular/forms';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  public venta: FormGroup;
  constructor(private _fb: FormBuilder) { }

  createForm(){
    this.venta = this._fb.group({
      name: ["", Validators.required],
      dir: ["", Validators.required],
      precio: ["",[ Validators.required,Validators.min(0),]]
    });
  }

  enviar(){
    if(this.venta.valid){
      let name = this.venta.get('name')?.value;
      let dir = this.venta.get('dir')?.value;
      let precio = this.venta.get('precio')?.value;
      /*let producto = new producto(name,dir,precio);*/
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

}
