import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})

export class ServiceService {

  apiKey : string = 'AIzaSyA5JfyKghDiqwyiKIXFmgiGDFQ0snSvKLY';

  constructor(public http: HttpClient) { }

    getVideosForChanel(channel: string, maxResults: string): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
