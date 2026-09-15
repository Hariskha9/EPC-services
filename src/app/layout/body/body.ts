import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
