import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-map-world',
  templateUrl: './map-world.component.html',
  styleUrls: ['./map-world.component.css']
})
export class MapWorldComponent {

  constructor (private apiService: ApiService) {}

  setCountryData(event: any) {
    console.log("event", event.target.id)
    this.apiService.fetchCountryData(event.target.id).subscribe(data => console.log(data))
  }
}
