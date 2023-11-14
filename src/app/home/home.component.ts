import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageUrl = 'assets/imagemplataforma.jpeg';
  imageAlt = 'Imagem 1';
  showFooter: boolean = false;

  @ViewChild('content') content: ElementRef | undefined;
  @ViewChild('footer') footer: ElementRef | undefined;

  constructor(private router: Router) {}

  navigate(path: string): void {
    console.log('Navigate to:', path);
    this.router.navigate([path]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.content && this.footer) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const contentHeight = this.content.nativeElement.clientHeight;
      const footerHeight = this.footer.nativeElement.clientHeight;
      const totalHeight = contentHeight + footerHeight;

      if (scrollPosition >= totalHeight - window.innerHeight) {
        this.showFooter = true;
      } else {
        this.showFooter = false;
      }
    }
  }
}
