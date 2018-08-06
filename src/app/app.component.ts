import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'mdb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {

  flagShow: boolean = false;

  template: string =
    `<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">`;

  constructor(private spinnerService: Ng4LoadingSpinnerService) {
    this.spinnerService.show();
  }

  ngOnInit() {
    this.flagShow = true;
    this.flagShow = false;
    setTimeout(function () {
      this.flagShow = true;
      this.spinnerService.hide();
      this.template = `<img class="custom-spinner-template1" src="https://loading.io/spinners/dna/lg.dna-spin-spiral-preloader.gif">`;
      this.template = `<img class="custom-spinner-template1" src="https://loading.io/spinners/gear-set/index.triple-gears-loading-icon.svg">`;
      this.template = `<img class="custom-spinner-template1" src="https://loading.io/spinners/fidget-spinner/index.fidget-spinner.svg">`;
    }.bind(this), 1000);
  }
}
