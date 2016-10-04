import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
