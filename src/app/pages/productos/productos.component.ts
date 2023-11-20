import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor( private ruta: ActivatedRoute){}

  producto:any

  private productos = [
    { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3' },
  ];

  ngOnInit(){
    this.ruta.params.subscribe(parametro=>{
      const id = +parametro['id'];
      this.producto= this.productos.find( producto => producto.id===id)
    })
  }



}
