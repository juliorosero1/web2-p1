import { Component } from '@angular/core';
import { DataFService } from 'src/app/services/data-f.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private servicio: DataFService){}

  nombre:any
  apellido:any
  id:any
  email:any

  cargar(form: any){


    this.servicio.postProducto(form.value).subscribe()

    console.log(form.value)


  }

  



}
