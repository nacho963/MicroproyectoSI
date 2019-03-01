import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
