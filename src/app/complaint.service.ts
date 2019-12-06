import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  complaint1={ title: "Estafa zapatos online", date:"19/11/19", denunciator: "41693317S", priority: "alta", cibercrime: "si", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus neque, euismod ut ligula sit amet, bibendum blandit leo. Nunc eu tellus vel quam mattis volutpat. Nullam vitae nisi lorem. Aenean egestas aliquet nibh eu facilisis. Proin quis arcu malesuada, viverra sapien in, faucibus tortor. Aliquam erat volutpat. Phasellus id risus ut nunc euismod suscipit congue ac elit. Morbi tincidunt, sem a scelerisque facilisis, lectus ipsum tempor est, id ullamcorper eros mauris ullamcorper mauris." }
  complaint2={  title: "Pelea plaza España", date:"19/11/2019", denunciator: "41693317S", priority: "alta", cibercrime: "si", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus neque, euismod ut ligula sit amet, bibendum blandit leo. Nunc eu tellus vel quam mattis volutpat. Nullam vitae nisi lorem. Aenean egestas aliquet nibh eu facilisis. Proin quis arcu malesuada, viverra sapien in, faucibus tortor. Aliquam erat volutpat. Phasellus id risus ut nunc euismod suscipit congue ac elit. Morbi tincidunt, sem a scelerisque facilisis, lectus ipsum tempor est, id ullamcorper eros mauris ullamcorper mauris." }
  complaint3={ title: "Robo av Europa", date:"19/11/2019", denunciator: "41693317S", priority: "alta", cibercrime: "si", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus neque, euismod ut ligula sit amet, bibendum blandit leo. Nunc eu tellus vel quam mattis volutpat. Nullam vitae nisi lorem. Aenean egestas aliquet nibh eu facilisis. Proin quis arcu malesuada, viverra sapien in, faucibus tortor. Aliquam erat volutpat. Phasellus id risus ut nunc euismod suscipit congue ac elit. Morbi tincidunt, sem a scelerisque facilisis, lectus ipsum tempor est, id ullamcorper eros mauris ullamcorper mauris." }
  complaintArray = [this.complaint1,this.complaint2,this.complaint3]
  constructor() { }
  getComplaints() {
  return this.complaintArray
  }
  setComplaint(complaints){
    console.log(complaints)

    this.complaintArray=complaints
  }


}