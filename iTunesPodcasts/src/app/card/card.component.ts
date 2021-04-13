import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: any;

  constructor(private _http: DataService) { }

  ngOnInit() {
    this._http.getPodcasts().subscribe(data => {
      this.cards = data;
      console.log(this.cards);
    });
  }

}
