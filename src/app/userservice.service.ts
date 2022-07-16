import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Search } from './app interface/searchinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url = 'http://localhost:3000/comments';


  constructor(private http : HttpClient) { }

  getSearches():Observable<Search[]>{
    return this.http.get<Search[]>(this.url)
  }
}
