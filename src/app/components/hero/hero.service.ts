import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

   constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/gubee/api/v1/heroes"
  
 create(hero: Hero): Observable<Hero> {
   const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
    };
   return this.http.post<Hero>(this.baseUrl, hero, httpOptions)
  }

  findAll(): Observable<Hero[]>  {
    return this.http.get<Hero[]>(this.baseUrl)
  }

  deleteById(id: string):  Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  findById(id: string): Observable<Hero>  {
    return this.http.get<Hero>(`${this.baseUrl}/${id}`)
  }

  update(id: string, hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
     };
    return this.http.put<Hero>(`${this.baseUrl}/${id}`, hero, httpOptions)
   }
}
