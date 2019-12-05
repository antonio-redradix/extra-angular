import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListDenunciasComponent } from './list-denuncias/list-denuncias.component';
import { FormDenunciasComponent } from './form-denuncias/form-denuncias.component';
import { DetailDenunciasComponent } from './detail-denuncias/detail-denuncias.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { EditDenunciasComponent } from './edit-denuncias/edit-denuncias.component';

const appRoutes: Routes = [
  { path: 'list', component: DenunciasComponent },
  { path: 'list/:id', component: DenunciasComponent },
  { path: 'add', component: FormDenunciasComponent },
  { path: 'edit', component: EditDenunciasComponent },
  { path: 'edit/:id', component: EditDenunciasComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
 ]
 

@NgModule({
  declarations: [
    AppComponent,
    ListDenunciasComponent,
    FormDenunciasComponent,
    DetailDenunciasComponent,
    DenunciasComponent,
    EditDenunciasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
