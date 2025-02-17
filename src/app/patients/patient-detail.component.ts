import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.services';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
  imports: [CommonModule, HttpClientModule, RouterModule]
})
export class PatientDetailComponent implements OnInit {
  patient: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const patientId = this.route.snapshot.paramMap.get('id');
    if (patientId) {
      this.apiService.getPatientById(patientId).subscribe(data => {
        this.patient = data;
      }, error => {
        console.error('Error fetching patient details', error);
      });
    }
  }
}
