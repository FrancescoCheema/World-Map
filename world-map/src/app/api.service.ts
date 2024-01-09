import { HttpClientModule } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryData(country: string) {
    let api = `http://api.worldbank.org/v2/country/${country}?format=json`;
    return this.http.get(api);
  }


  setCountryData(country: string) {
    let subject = new Subject();

  this.fetchCountryData(country).subscribe((data: any) => {

    subject.next({
      nation: data.name,
    })
  })
  }}

