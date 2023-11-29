import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  constructor(private http: HttpClient, private router: Router) {}

  enviarCadastro(dadosCadastro: any) {
    // Aqui você deve enviar os dados para o Firebase
    const url = 'https://console.firebase.google.com/project/bookstaked/database/bookstaked-default-rtdb/data?hl=pt-br;' // Substitua pela URL correta da sua API do Firebase

    this.http.post(url, dadosCadastro).subscribe((response) => {
      console.log('Dados enviados com sucesso para o Firebase:', response);
      // Redirecionar ou fazer algo após o envio bem-sucedido
      this.router.navigate(['/login']); // Por exemplo, redirecionar para a página de login após o cadastro
    }, (error) => {
      console.error('Erro ao enviar dados para o Firebase:', error);
      // Tratar erro, exibir mensagem para o usuário, etc.
    });
  }

  onSubmit(form: any) {
    // Manipule os dados do formulário e chame enviarCadastro()
    const dadosCadastro = {
      nome: form.nome,
      sobrenome: form.sobrenome,
      email: form.email,
      senha: form.senha,
      // Outros dados do cadastro
    };

    // Chame enviarCadastro() com os dados do formulário
    this.enviarCadastro(dadosCadastro);
  }
}