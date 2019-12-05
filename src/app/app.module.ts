import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { DenunciasListComponent } from './denuncias-list/denuncias-list.component';
import { DenunciasDetailComponent } from './denuncias-detail/denuncias-detail.component';
import { AddFormComponent } from './add-form/add-form.component';

import { ReactiveFormsModule } from '@angular/forms';



const appRoutes: Routes = [
  { path: 'list', component: DenunciasComponent },
  { path: 'list/:id', component: DenunciasComponent },
  { path: 'add', component: AddFormComponent },
  { path: 'add/:id', component: AddFormComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },

 ];

@NgModule({
  declarations: [
    AppComponent,
    DenunciasComponent,
    DenunciasListComponent,
    DenunciasDetailComponent,
    AddFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
      ),
      ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
