import { Injectable } from '@angular/core';
import { Complaint } from './complaintInterface';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  complaints : Complaint[] = [];
  
  constructor() {}

  getComplaints(): Complaint[]{
    if(localStorage.getItem('Complaints') == null){
      this.complaints = [
        {title: 'Estafa zapatos online', id: 2345, date:'07/08/2005', complainant: '41693317S', priority: 'alta', cybercrime: true, statement: 'Lorem Ipsum'},
        {title: 'Pelea Plaza España', id: 3456, date:'06/09/2005', complainant: '41693317S', priority: 'alta', cybercrime: true, statement: 'Lorem Ipsum'},
        {title: 'Estafa zapatos online', id: 5678, date:'05/10/2005', complainant: '41693317S', priority: 'alta', cybercrime: true, statement: 'Lorem Ipsum'}
      ]
    }else{
      this.complaints = JSON.parse(localStorage.getItem('Complaints'));
    }
    let complaints = this.complaints;
    return complaints;
  }

  addComplaint(newComplaint : Complaint) : boolean{
    this.complaints.push(newComplaint);
    this.update();
    return true;
  }

  deleteComplaint(index : number) : boolean{
    this.complaints.splice(index, 1);
    this.update();
    return true;
  }

  updateComplaint(newComplaint : Complaint, index: number){
    this.complaints[index] = newComplaint;
    this.update();
  }

  update(){
    localStorage.setItem('Complaints', JSON.stringify(this.complaints));
  }
  
    
}
