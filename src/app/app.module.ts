import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: DetailComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  ]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    AddComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } 
      ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
