import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KitsuApiService {
  private baseUrl = 'https://kitsu.io/api/edge';

  constructor(private http: HttpClient) {}

  searchAnime(query: string): Observable<any> {
    const url = `${this.baseUrl}/anime`;
    const params = new HttpParams().set('filter[text]', query);
    return this.http.get(url, { params }).pipe(
      map((response: any) => response.data)
    );
  }

  getAnimeById(id: string): Observable<any> {
    const url = `${this.baseUrl}/anime/${id}`;
    return this.http.get(url).pipe(
      map((response: any) => response.data)
    );
  }
}