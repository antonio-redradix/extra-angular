import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  { path: 'form', component: FormComponent},
 { path: 'detail/:id', component:DetailComponent}, 
 { path: 'list', component:ListComponent},
 {path:'form/:id', component:FormComponent},
  
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
  ]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
