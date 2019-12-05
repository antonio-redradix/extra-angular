import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ReportService  {
  constructor() { }
  report1 = {
    title: 'Estafa zapatos online',
    date: '19/11/2019',
    complainant: '41693317S',
    priority: 'Alta',
    cibercrime: 'Si',
    declaration: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus repellat voluptatum, ad nobis, ipsa assumenda consectetur aliquam possimus quae doloremque corporis, dolorem laboriosam aut temporibus quas deleniti reprehenderit aspernatur?'
  };
  report2 = {
    title: 'Pelea plaza España',
    date: '7/10/2019',
    complainant: '41693317S',
    priority: 'Baja',
    cibercrim: 'No',
    declaration: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus repellat voluptatum, ad nobis, ipsa assumenda consectetur aliquam possimus quae doloremque corporis, dolorem laboriosam aut temporibus quas deleniti reprehenderit aspernatur?'
  };
  report3 = {
    title: 'Robo av. Europa',
    date: '4/12/2019',
    complainant: '41693317S',
    priority: 'Alta',
    cibercrim: 'No',
    declaration: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus repellat voluptatum, ad nobis, ipsa assumenda consectetur aliquam possimus quae doloremque corporis, dolorem laboriosam aut temporibus quas deleniti reprehenderit aspernatur?'
  };
  reportList = [this.report1, this.report2, this.report3];
  getReport() {
    return this.reportList;
  }
}
