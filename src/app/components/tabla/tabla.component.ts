import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataFService } from 'src/app/services/data-f.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  constructor(private servicio: DataFService, private ruta:Router){}


  data:any
  ngOnInit(){
    this.servicio.getProducto().subscribe(p=>{
      this.data =p
    })
  }

  actual(){
    this.ruta.navigate(['/'])
  }

}
