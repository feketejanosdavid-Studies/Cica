import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cica';
  
  oszlopok = ['nev','kor','nem']
  emberek:any = [
    {nev:'Attila', kor: 50, nem:'Nő'},
    {nev:'Béla', kor: 31, nem:'Nő'},
    {nev:'Dezső', kor: 55, nem:'Férfi'},
    {nev:'András', kor: 60, nem:'Férfi'}
  ]

  ujEmber:any ={}

  hozzaAd(){
    this.emberek.push(this.ujEmber)
    this.ujEmber={}
  }

  torles(ember:any){
    console.log(ember)
    this.emberek = this.emberek.filter(
      (e:any) => e!=ember
    )
  }
}
