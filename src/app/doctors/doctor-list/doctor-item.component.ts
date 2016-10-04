import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'mb-doctor-item',
  templateUrl: './doctor-item.component.html',
  styles: []
})
export class DoctorItemComponent implements OnInit {

  @Input() doctor: Doctor;
  doctorId: number;

  constructor() { }

  ngOnInit() {
  }

}
