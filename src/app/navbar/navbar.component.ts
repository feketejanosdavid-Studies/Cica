import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuPontok=[
    {Link:"home", name:"Kezdőlap"},
    {Link:"data", name:"Adatok"},
    {Link:"help", name:"Sugó"},
  ]
}
