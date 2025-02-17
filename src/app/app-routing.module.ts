import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { PatientListComponent } from './patients/patient-list.component';
import { PatientDetailComponent } from './patients/patient-detail.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'patients/:id', component: PatientDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
