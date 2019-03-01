import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { app } from 'firebase';
import { HomeComponent } from './vistas/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';


const routes: Routes = [
  {
    path:'',
    children:[
    {path: '',redirectTo:'/home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'perfil',component: PerfilComponent},
    {path: 'detalles',component: DetallesComponent}
   
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
