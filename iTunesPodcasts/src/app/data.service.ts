import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  podcasts: any[] = [];
  constructor(private http: HttpClient) { }

  getPodcasts(){
    return this.http.get('https://rss.itunes.apple.com/api/v1/ro/podcasts/top-podcasts/all/20/explicit.json')
    .pipe(
      map(res => {
      const podcasts = res.feed.results;
      this.podcasts = podcasts;
      return podcasts;
    }));
  }
  getDetails(podcastName: string){
    return this.podcasts.filter( val => val.name === podcastName )[0];
  }
}
