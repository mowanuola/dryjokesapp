import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getJokes() {
    return this.http.get('https://official-joke-api.appspot.com/jokes/programming/random');
  }
}
