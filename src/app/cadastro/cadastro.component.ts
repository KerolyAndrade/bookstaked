import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/firebase-auth.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  dadosCadastro: any = {}; // Objeto para armazenar os dados do formulário
  senhaConfirmacao: string = '';
  senhasNaoCoincidem: boolean = false; // Variável para controlar a exibição da mensagem de erro

  constructor(private authService: FirebaseAuthService, private router: Router) {}

  enviarCadastro() {
    if (this.dadosCadastro.senha === this.senhaConfirmacao) {
      this.authService.registrarUsuario(this.dadosCadastro.email, this.dadosCadastro.senha, this.dadosCadastro)
        .subscribe((response: any) => {
          console.log('Usuário registrado com sucesso:', response);
          this.router.navigate(['/login']);
        }, (error: any) => {
          console.error('Erro ao registrar usuário:', error);
        });
    } else {
      this.senhasNaoCoincidem = true;
      console.error('As senhas não coincidem');
    }
  }

  onSubmit() {
    // Verifique se a senha e a confirmação de senha são iguais
    this.enviarCadastro();
  }
  verificarSenha() {
    this.senhasNaoCoincidem = this.dadosCadastro.senha !== this.senhaConfirmacao;
  }

}
