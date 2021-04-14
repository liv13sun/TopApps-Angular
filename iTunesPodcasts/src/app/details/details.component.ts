import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: any;
  constructor(private info: DataService) { }

  ngOnInit(){
    this.info.getDetails().subscribe(data => {
      this.details = data;
      console.log(this.details);
    });
  }

}
