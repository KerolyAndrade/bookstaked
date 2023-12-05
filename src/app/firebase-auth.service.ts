import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  constructor(private angularFireAuth: AngularFireAuth, private http: HttpClient) {}

  registrarUsuario(email: string, senha: string, dadosCadastro: any): Observable<any> {
    return new Observable((observer) => {
      this.angularFireAuth.createUserWithEmailAndPassword(email, senha)
        .then((userCredential: any) => {
          const userId = userCredential.user.uid;

          const url = `https://bookstaked-default-rtdb.firebaseio.com/usuarios/${userId}.json`;

          this.http.put(url, dadosCadastro).subscribe(() => {
            observer.next(); // Informa que a operação foi concluída com sucesso
            observer.complete();
          }, (error) => {
            observer.error(error);
          });
        })
        .catch((error: any) => {
          observer.error(error);
        });
    });
  }
}

