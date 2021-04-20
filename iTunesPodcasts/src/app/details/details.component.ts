import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: any;
  constructor(private info: DataService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe((params) => {
      const podcastName =  params.podcastName;
      this.details = this.info.getDetails(podcastName);
   });
  }

}
