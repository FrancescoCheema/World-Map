import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-map-world',
  templateUrl: './map-world.component.html',
  styleUrls: ['./map-world.component.css']
})
export class MapWorldComponent {
  country: any = {};

  constructor (private apiService: ApiService) {}

  setCountryData(event: any) {
    console.log("event", event.target.id)
    this.apiService.fetchCountryData(event.target.id).subscribe((data: any) => {
      console.log(data)
      const countryInfo = data[1][0];

      this.country = {
        ...data,
        nation: event.target.getAttribute('title'),
        capital: countryInfo.capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      }
    })
  }
}
