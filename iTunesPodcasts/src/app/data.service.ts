import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPodcasts(){
    return this.http.get('https://rss.itunes.apple.com/api/v1/ro/podcasts/top-podcasts/all/20/explicit.json')
    .pipe(
      map(res => {
      return res['feed']['results'];
    }))
  }
  getDetails(){
    return this.http.get('https://rss.itunes.apple.com/api/v1/ro/podcasts/top-podcasts/all/20/explicit.json')
    .pipe(
      map(res => {
      return res['feed']['results']['genres'];
    }))
  }
}
