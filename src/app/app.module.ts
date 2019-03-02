import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { InformacionChefComponent } from './vistas/informacion-chef/informacion-chef.component';
import { DetallesPlatosComponent } from './vistas/detalles-platos/detalles-platos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { HomeComponent } from './vistas/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

const config = {
  apiKey: "AIzaSyBCaG5k8PY2NL_8LjZIw11vxPunzgtLs54",
authDomain: "microproyecto-6d50d.firebaseapp.com",
databaseURL: "https://microproyecto-6d50d.firebaseio.com",
projectId: "microproyecto-6d50d",
storageBucket: "microproyecto-6d50d.appspot.com",
messagingSenderId: "681952830694"
}

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    InformacionChefComponent,
    DetallesPlatosComponent,
    DetallesComponent,
    PerfilComponent
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
