import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  today = Date.now();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }

}
