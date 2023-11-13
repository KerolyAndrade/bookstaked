import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Adicione as propriedades imageUrl e imageAlt
  imageUrl = 'assets/imagem2.jpg';
  imageAlt = 'Imagem 1';

  // Se precisar de itens de menu, você pode adicionar aqui
  menuItems: MenuItem[] = [
    { label: 'Item 1', path: '/item1' },
    { label: 'Item 2', path: '/item2' },
    { label: 'Item 3', path: '/item3' },
  ];

  constructor() {}

  navigate(path: string): void {
    console.log('Navigate to:', path);
    // Adicione a lógica de navegação aqui, se necessário
  }
}

interface MenuItem {
  label: string;
  path: string;
}
