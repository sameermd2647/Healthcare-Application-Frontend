import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/auth/login.component';
import { PatientListComponent } from './app/patients/patient-list.component';
import { PatientDetailComponent } from './app/patients/patient-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'patients/:id', component: PatientDetailComponent }
    ]),
    importProvidersFrom(HttpClientModule, FormsModule) // ✅ Ensure HttpClientModule is imported
  ]
});
