import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.services';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
  imports: [CommonModule, HttpClientModule, RouterModule]
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPatients().subscribe(data => {
      this.patients = data;
    }, error => {
      console.error('Error fetching patients', error);
    });
  }
}
