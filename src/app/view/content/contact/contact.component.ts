import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  map = {
    lat: 15.978328,
    lng: 108.261720
  };
  image = "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/10986898_1605460106354987_839997079374616851_n.jpg?_nc_cat=0&oh=77cafeb658a3354feca67189fc896047&oe=5BD3907B";
  constructor() { }

  ngOnInit() {
  }

}
