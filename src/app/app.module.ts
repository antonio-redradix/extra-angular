import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ComplaintsFormComponent } from './complaints-form/complaints-form.component';
import { ComplaintsDetailComponent } from './complaints-detail/complaints-detail.component';
import { RouterModule, Routes } from '@angular/router';//Necesario para Router
import { ReactiveFormsModule} from '@angular/forms'//Necesario para los Validators

//Necesario para Router:
const appRoutes: Routes = [
  { path: 'detail/:id', component: ComplaintsDetailComponent },
  { path: 'list', component: ComplaintsListComponent},
  { path: 'add', component: ComplaintsFormComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'form/:id',component: ComplaintsFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsListComponent,
    ComplaintsFormComponent,
    ComplaintsDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,//Para los validators
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),//Para el router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
