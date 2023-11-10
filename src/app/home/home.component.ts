import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor() {}

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true
      }
    ];

    this.galleryImages = [
      {
        small: '../assets/imagem1.jpg',
        medium: 'assets/imagem1.jpg',
        big: 'assets/imagem1.jpg'
      },
      {
        small: 'assets/imagem2.jpg',
        medium: 'assets/imagem2.jpg',
        big: 'assets/imagem2.jpg'
      },
      {
        small: 'assets/imagem3.jpg',
        medium: 'assets/imagem3.jpg',
        big: 'assets/imagem3.jpg'
      }
    ];
  }
}