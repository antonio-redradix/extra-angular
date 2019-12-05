import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'list', component: ReportListComponent },
  { path: 'detail/:id', component: ReportDetailComponent },
  { path: 'form', component: ReportFormComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    ReportFormComponent,
    ReportDetailComponent,
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
