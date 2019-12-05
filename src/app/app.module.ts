import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintDetailComponent } from './complaint-detail/complaint-detail.component';

import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { ComplaintEditComponent } from './complaint-edit/complaint-edit.component';

const appRoutes: Routes = [
  { path: 'list', component: ComplaintListComponent },
  { path: 'add', component: ComplaintFormComponent },
  { path: 'edit/:id', component: ComplaintEditComponent },
  { path: 'list/:id', component: ComplaintDetailComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ComplaintListComponent,
    ComplaintFormComponent,
    ComplaintDetailComponent,
    ComplaintEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
