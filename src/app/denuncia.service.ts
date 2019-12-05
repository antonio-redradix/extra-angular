import { Injectable } from '@angular/core';
import { Denuncia } from './denuncias/denuncia';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
 d: Array<Denuncia>;


  constructor(private router: Router) {
    //localStorage.clear();
   if (!window.localStorage.getItem('denuncias')) {
    // tslint:disable-next-line: max-line-length
    this.d =  [{id: 1 , name: 'Robo monedero' , fecha: new Date(1996, 3, 20), denunciante: '23478272S', prioridad: 'Alta', ciberdelito: 'No', descripcion: 'Hoy he ido a comer un helado y alguien me ha robado el monedero'},
  // tslint:disable-next-line: max-line-length
  { id: 2 , name: 'Pelea en callejon', fecha: new Date(1996, 6, 29), denunciante: '23478272S', prioridad: 'Muy baja', ciberdelito: 'No', descripcion: 'Unos jovenes se pelearon en un callejon cerca de Moncloa. Investigar identidades.'}];
    window.localStorage.setItem('denuncias', JSON.stringify(this.d));
  } else {
    this.d = JSON.parse(localStorage.getItem('denuncias'));
   }}

  getDenuncias(): Array<Denuncia> {
    return this.d ;
  }

  add(d: Denuncia) {
    if (this.d.length !== 0) {
      d.id = this.d[this.d.length - 1].id + 1;
    }
    this.d.push(d);
    window.localStorage.setItem('denuncias', JSON.stringify(this.d));
    this.router.navigate(['/list']);
  }

  remove(d: Denuncia) {
    this.d.splice(this.d.indexOf(d), 1);
    window.localStorage.setItem('denuncias', JSON.stringify(this.d));
  }

  getdenuncia(i: number) {

    return this.d[i - 1];
  }

  modifydenuncia(denuncia: Denuncia) {
    this.d[denuncia.id - 1] = denuncia;
    window.localStorage.setItem('denuncias', JSON.stringify(this.d));
    this.router.navigate(['/list']);
  }
}
