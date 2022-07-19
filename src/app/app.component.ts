import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private weather:WeatherService){
    this.weather.getFromUserSelection("cordoba").subscribe(data=>console.log(data))
  }
}
