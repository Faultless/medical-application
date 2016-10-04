import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Doctor } from '../doctor';

@Component({
  selector: 'mb-doctor-list',
  templateUrl: './doctor-list.component.html',
  styles: []
})
export class DoctorListComponent implements OnInit {

  @Output() doctorSelected = new EventEmitter<Doctor>();
  doctors: Doctor[] = [
    new Doctor('Greg House', 'it\'s Greg House', 'https://s-media-cache-ak0.pinimg.com/originals/f7/eb/e3/f7ebe3a79b907823c7518772f38d9a96.jpg', []),
    new Doctor('Doctor Strange', 'i\'m fictional', 'http://www.cheatsheet.com/wp-content/uploads/2016/04/doctor-strange-pic-full.jpg', [])
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelected(doctor: Doctor) {
    this.doctorSelected.emit(doctor);
  }

}
