import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readLocalStorage(key:string):string{
    return localStorage.loged;
  }

  logout(): void{
    localStorage.loged = 'false';
    window.location.replace("/list");
  }
  
  title = 'comisariaZaragoza';
}
