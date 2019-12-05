import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ComplaintsFormComponent } from './complaints-form/complaints-form.component';
import { ComplaintsDetailComponent } from './complaints-detail/complaints-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



const appRoutes: Routes = [
  { path: 'list', component: ComplaintsListComponent },
  { path: 'detail/:id', component: ComplaintsDetailComponent },
  { path: 'form', component: ComplaintsFormComponent },
  { path: 'form/:id', component: ComplaintsFormComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
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
    ReactiveFormsModule,
    RouterModule.forRoot (
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
