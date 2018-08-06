import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  image = "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/36283331_2180277348873257_5484007839183667200_n.jpg?_nc_cat=0&oh=55e708f301e6ff27a1ce03e595fa15f5&oe=5BCA3BB2";
  constructor() { }

  ngOnInit() {
  }

}
