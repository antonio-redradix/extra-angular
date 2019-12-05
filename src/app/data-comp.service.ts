import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCompService {

  database : object[] = [
    {id:423523 ,date: '2/09/2017', priority: 'alta', ciberCrime: true, title: 'Estafa de zapatos online', accuser: '41693317S', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id:423524 ,date: '4/05/2018', priority: 'media', ciberCrime:false, title: 'Pelea de Plaza España', accuser: '41693317S', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id:423525 ,date: '14/12/2018', priority: 'media', ciberCrime:false, title: 'Robo av. Europa', accuser: '41693317S', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
  ];

  constructor() { }

  login(){
    if(!localStorage.loged){
      localStorage.setItem("loged", "false");
      return false
    } else if (localStorage.loged === 'false'){
      return false

    }else{
      return true
    }
  }

  getComplaints(){
    if(!localStorage.database) {
      localStorage.setItem("database", JSON.stringify(this.database));
    }
    return JSON.parse(localStorage.database);
  }

  deleteComplaint(id:number){
    this.database = JSON.parse(localStorage.database);
    this.database.splice(id, 1);
    localStorage.database = JSON.stringify(this.database);
  }
}
