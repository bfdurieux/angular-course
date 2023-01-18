import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWikipediaResponse } from './abstractions/iwikipedia-response';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get<IWikipediaResponse>('https://en.wikipedia.org/w/api.php?', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }
}
// https://en.wikipedia.org/w/api.php?
// action=query&
// format=json&
// list=search&
// utf8=1&
// srsearch=space
