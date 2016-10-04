import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor';

@Component({
  selector: 'mb-doctors',
  templateUrl: './doctors.component.html',
  styles: []
})
export class DoctorsComponent implements OnInit {

  selectedDoctor: Doctor;

  constructor() { }

  ngOnInit() {
  }

}
