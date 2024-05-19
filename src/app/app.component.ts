import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mardyna';
  pages = [
    {name:"Accueil", icon: 'house', path:'home'},
    {name:"Entités", icon: 'tools', path:'entities'},
    {name:"Documentation", icon: 'book', path:'documentation'}
  ]
}
