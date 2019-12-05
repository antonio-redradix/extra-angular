import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ComplaintsFormComponent } from './complaints-form/complaints-form.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ComplaintsDetailComponent } from './complaints-detail/complaints-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComplaintAppComponent } from './complaint-app/complaint-app.component';

const appRoutes: Routes = [
  { path: 'list', component: ComplaintsListComponent },
  { path: 'add', component: ComplaintsFormComponent },
  { path: 'add/:id', component: ComplaintsFormComponent },
  { path: 'detail/:id', component: ComplaintsDetailComponent },
  { path: '', redirectTo: '/list' , pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsListComponent,
    ComplaintsFormComponent,
    NotFoundPageComponent,
    ComplaintsDetailComponent,
    ComplaintAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
