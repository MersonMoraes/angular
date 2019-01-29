import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private api = environment.backend_api;

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<any> {
    return this.http.get<any>(this.api + '/hello');
  }
}
