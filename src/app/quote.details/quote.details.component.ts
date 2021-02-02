import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote.details.component.html',
  styleUrls: ['./quote.details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  constructor() { }
  @Input()
  quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  numberOflikes = 0;
  // isComplete: any;

  // tslint:disable-next-line: typedef
  quoteDelete(complete: boolean){
    this.isComplete.emit(complete);
  }

  // tslint:disable-next-line: typedef
  likeButtonClick(){
   this.numberOflikes++;
  }

  // tslint:disable-next-line: typedef
  disLikeButtonClick(){
    this.numberOflikes--;
  }

  ngOnInit(): void {
  }

}
