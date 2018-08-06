import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {


  constructor() { }

  public content:string ="bình luận của bạn đã gởi đi thành công";
  ngOnInit() {
  }

}
