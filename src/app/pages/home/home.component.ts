import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productos = [
    { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3' },
  ];

}
