import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { app } from 'firebase';
import { HomeComponent } from './vistas/home/home.component';
import { InformacionChefComponent } from './vistas/informacion-chef/informacion-chef.component';
import { DetallesPlatosComponent } from './vistas/detalles-platos/detalles-platos.component';


const routes: Routes = [

  {
    path:'',
    children:[
    {path: '',redirectTo:'/home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'perfil',component: InformacionChefComponent},
    {path: 'detalles/:id',component: DetallesPlatosComponent}

    ],

    },
 
];

@NgModule({
  declarations: [
    
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
