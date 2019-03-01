import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { app } from 'firebase';
import{AppComponent}from './app.component';



const routes: Routes = [
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
