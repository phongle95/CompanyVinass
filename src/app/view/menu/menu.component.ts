import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { TripcarService } from '../../api/tripcar.service';
import { ModalDirective } from '../../typescripts/free';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user = new User();
  check = false;
  a = false;
  @ViewChild('loginModal') public loginModal: ModalDirective;

  login: boolean;

  constructor(
    private tripcarservice: TripcarService,
    private router: Router,
    private cookieService: CookieService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    //user login 
    if (this.cookieService.get('login') === '1') {
      this.user.username = this.cookieService.get('username');
      this.user.password = this.cookieService.get('password');
      this.user.name = this.cookieService.get('name');
      this.user.role = this.cookieService.get('role');
      // alert(this.user.role)
      this.login = true;
    }

    //carer login

  }

  logIn() {
    const param: any = { username: this.user.username, password: this.user.password };
    this.tripcarservice.excuteAllByWhat(param, '4').subscribe((data) => {
      if (data !== null) {
        this.user = data[0];
        // save data to cookie
        this.cookieService.set('idUser', this.user.idUser);
        this.cookieService.set('username', this.user.username);
        this.cookieService.set('password', this.user.password);
        this.cookieService.set('name', this.user.name);
        this.cookieService.set('role', this.user.role);
        this.cookieService.set('login', '1');
        this.login = true;
        this.loginModal.hide();
        this.goBack();

        this.toastrService.success('Đăng nhập thành công!', 'Thông báo');
      } else {
        this.cookieService.set('login', '0');
        this.login = false;
        this.toastrService.error('Tên tài khoản hoặc mật khẩu không đúng!', 'Đăng nhập không thành công');
      }
    });
  }

  exit() {
    this.check = !this.check;
  }

  goBack() {
    this.router.navigate(['']);
  }

  onClickExit() {
    this.cookieService.deleteAll();
    this.cookieService.set('login', '0');
    this.login = false;
    this.router.navigate(['']);
  }

  onClickAccount() {

  }

}
