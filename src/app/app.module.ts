import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Certifique-se de importar isso
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importe o módulo Firestore


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD1GZY_c7nroa0rcLxxdTFrfPzJTCqsBg8",
      authDomain: "bookstaked.firebaseapp.com",
      projectId: "bookstaked",
      storageBucket: "bookstaked.appspot.com",
      messagingSenderId: "350988939617",
      appId: "1:350988939617:web:4364008543b803e2a0d520",
      measurementId: "G-3GTSZV7JXV"
    }), 
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


