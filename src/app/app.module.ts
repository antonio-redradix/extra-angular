import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { DenunciaDetailComponent } from './denuncia-detail/denuncia-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DenunciasListComponent } from './denuncias-list/denuncias-list.component';
import { AddDenunciaComponent } from './add-denuncia/add-denuncia.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [  
  { path: 'list/:id', component: DenunciasComponent },  
  { path: 'list', component: DenunciasComponent },  
  { path: 'add', component: AddDenunciaComponent }, 
  { path: 'add/:id', component: AddDenunciaComponent }, 
  { path: '',   redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    DenunciasComponent,
    DenunciaDetailComponent,
    DenunciasListComponent,
    AddDenunciaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
