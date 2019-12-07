import { Injectable } from '@angular/core';
import { ComplaintInterface } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  complaintList: ComplaintInterface[] = [
    {
      title: 'Estafa zapatos online',
      date: '19/11/2019',
      whistleblower: '41682317S',
      priority: 'hight',
      cyberSecurity: true,
      declaration: 'El denunciante alega que compró unos zapatos de Charol en la tienda virtual ZapatosGratis.com y que nunca le llegaron. Así mismo asegura que perdió el dinero de la compra: 765 €',
    },
    {
      title: 'Pelea plaza España',
      date: '23/11/2019',
      whistleblower: '41682836H',
      priority: 'low',
      cyberSecurity: false,
      declaration: 'Ostias a palos en mitad de Plaza España debido a la falta de consenso por la nueva ubicación de la estatua del Quijote. 174 heridos por arma blanca y 78 por bastonazo',
    },
    {
      title: 'Robo av Europa',
      date: '25/11/2019',
      whistleblower: '41918317J',
      priority: 'medium',
      cyberSecurity: false,
      declaration: 'Se denuncia el robo de las herraduras de un caballo aparcado en la Avenida de Europa número 32. El denunciante alega que llegó al lugar de los hechos y encontró al caballo panza arriba y con las patas atadas.',
    },
    {
      title: 'Intento de robo',
      date: '28/11/2019',
      whistleblower: '71618317J',
      priority: 'hight',
      cyberSecurity: false,
      declaration: 'Esto es una prueba a ver qué tal funciona lo de añadir un nuevo delito directamente a través del servicio',
    },

  ];

  constructor() {}

  getComplaintList (): ComplaintInterface[] {
    return this.complaintList;
  };

  deleteComplaint (e: number): void {
    let arrOfComplaints = JSON.parse(window.sessionStorage.complaintList);
    arrOfComplaints.splice(e,1)
    window.sessionStorage.complaintList = JSON.stringify(arrOfComplaints);
  };

  addComplaint (complaint: ComplaintInterface) {
    let arrOfComplaints = JSON.parse(window.sessionStorage.complaintList);
    arrOfComplaints.push(complaint);
    window.sessionStorage.complaintList = JSON.stringify(arrOfComplaints);
  };

  updateComplaintList (num: number, complaint: ComplaintInterface): void {
    
    let arrOfComplaints = JSON.parse(window.sessionStorage.complaintList);
    arrOfComplaints[num] = complaint;
    window.sessionStorage.complaintList = JSON.stringify(arrOfComplaints);
    
  }

  renderSomething(string: string): void {
    console.log('something rendered'+string);
  }

  
}
