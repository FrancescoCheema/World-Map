import { HttpClientModule } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryNames(country: string) {
    let api = "http://api.worldbank.org/v2/country/${country}?format=json";
    return this.http.get(api);
  }
}
