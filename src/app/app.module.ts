import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ComplaintsAddComponent } from './complaints-add/complaints-add.component';
import { ComplaintsDetailComponent } from './complaints-detail/complaints-detail.component';
import { ComplaintsEditComponent } from './complaints-edit/complaints-edit.component';

const appRoutes: Routes = [
  { path: 'list', component: ComplaintsListComponent },
  { path: 'add', component: ComplaintsAddComponent },
  { path: 'list/:id', component: ComplaintsDetailComponent },
  { path: 'edit/:id', component: ComplaintsEditComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsListComponent,
    ComplaintsAddComponent,
    ComplaintsDetailComponent,
    ComplaintsEditComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
