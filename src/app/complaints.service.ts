import { Injectable } from '@angular/core';
import { Complaint} from './complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  complaints: Complaint[] = [
    {name:"Estafa zapatos online",code:"41693317S",number:"11234",date:"19/11/2019",priority:"ALTA",type:"SÍ",declaration:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",id:0},
    {name:"Pelea plaza España",code:"46195367F",number:"11235",date:"23/11/2019",priority:"ALTA",type:"NO",declaration:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",id:1},
    {name:"Robo av. Europa",code:"78693567P",number:"11236",date:"30/11/2019",priority:"BAJA",type:"SÍ",declaration:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",id:2}
  ];

  constructor() { }

  getComplaints(): Complaint[]{
    return this.complaints;
  }
}
