import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  image = "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/27972242_2112583795642613_7197716476486220414_n.jpg?_nc_cat=0&oh=ab83a8eb27b37df5effb162eeaa4d0e7&oe=5BCD9571";
  constructor() { }

  ngOnInit() {
  }

}
