import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ListDenunciasComponent } from './list-denuncias/list-denuncias.component';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { DenunciaDetailComponent } from './denuncia-detail/denuncia-detail.component';
import { DenunciaFormComponent } from './denuncia-form/denuncia-form.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes =[
  { path: 'list/:id', component: DenunciasComponent },
  { path: 'list', component: DenunciasComponent},
  { path: 'add', component: DenunciaFormComponent },
  { path: 'add/:id', component: DenunciaFormComponent },
  { path: '',   redirectTo: '/list', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent } 
]

@NgModule({
  declarations: [
    AppComponent,
    ListDenunciasComponent,
    DenunciasComponent,
    DenunciaDetailComponent,
    DenunciaFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing : false}
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
