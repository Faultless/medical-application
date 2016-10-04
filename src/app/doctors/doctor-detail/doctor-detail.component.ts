import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'mb-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styles: []
})
export class DoctorDetailComponent implements OnInit {

  @Input() selectedDoctor: Doctor;

  constructor() { }

  ngOnInit() {
  }

}
