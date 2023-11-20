import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: "home", component:HomeComponent},
  { path: "producto/:id", component: ProductosComponent},
  { path: 'formulario', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
