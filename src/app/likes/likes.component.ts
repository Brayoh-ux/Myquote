import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  numberOfLikes = 0;
  numberOfDislikes = 0;

  // tslint:disable-next-line: typedef
  likeButtonClick(){
    this.numberOfLikes ++;
  }

  // tslint:disable-next-line: typedef
  dislikeButtinClick(){
    this.numberOfDislikes ++;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
