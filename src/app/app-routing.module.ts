import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'; // Importe 'Route' em vez de 'Routes'
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';


const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Alterado para redirecionar para '/home'
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
