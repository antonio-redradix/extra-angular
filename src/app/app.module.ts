import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComplaintsComponent } from './list-complaints/list-complaints.component';
import { FormComplaintComponent } from './form-complaint/form-complaint.component';
import { DetailComplaintComponent } from './detail-complaint/detail-complaint.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

const appRoutes: Routes = [
  { path: 'list', component: ListComplaintsComponent },
  { path: 'list/:id', component: DetailComplaintComponent },
  { path: 'form', component: FormComplaintComponent },
  { path: 'form/:id', component: FormComplaintComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
 ]
 
@NgModule({
  declarations: [
    AppComponent,
    ListComplaintsComponent,
    FormComplaintComponent,
    DetailComplaintComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      ),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
