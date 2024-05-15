import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetBooksResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<GetBooksResponse> {
    return this.http.get<GetBooksResponse>('https://openlibrary.org/subjects/love.json');
  }
}
