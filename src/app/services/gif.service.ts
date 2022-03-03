import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  constructor(private http: HttpClient) {}

  getTrendingSearches() {
    const TRENDING_SEARCH_TERMS_URL = `http://api.giphy.com/v1/trending/searches?api_key=3Wb5Jz0eQyNrB1TWwFxyvbbm4XXezRjw&limit=24&lang=tr`;
    // @ts-ignore
    return this.http.get(`${TRENDING_SEARCH_TERMS_URL}`).pipe(map((response) => response?.data));
  }

  getTrendingGifs() {
    // const TRENDING_SEARCH_TERMS_URL = `http://api.giphy.com/v1/trending/searches?api_key=3Wb5Jz0eQyNrB1TWwFxyvbbm4XXezRjw&limit=24`;
    const TRENDING_GIFS_URL = `http://api.giphy.com/v1/gifs/trending?api_key=3Wb5Jz0eQyNrB1TWwFxyvbbm4XXezRjw&limit=24`;
    // @ts-ignore
    return this.http.get(`${TRENDING_GIFS_URL}`).pipe(map((response) => response?.data));
  }

  listAllGifsBySearchTerm(searchTerm: string) {
    const eski = 'dc6zaTOxFJmzC';
    const URL = `http://api.giphy.com/v1/gifs/search?api_key=3Wb5Jz0eQyNrB1TWwFxyvbbm4XXezRjw&limit=12&q=${searchTerm}&lang=tr`;
    // @ts-ignore
    return this.http.get(`${URL}`).pipe(map((value) => value?.data));
  }
}
