import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {DataCompService} from '../data-comp.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    })

    onSubmit(){
      if (this.login.value.user === '1234' && this.login.value.password === '1234'){
        localStorage.loged = 'true';
        window.location.replace("/list");
      } else {
        alert('Nombre o contraseña incorrectos');
      }
    }

  constructor(
    private dataCompService : DataCompService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.dataCompService.login();
  }

}
