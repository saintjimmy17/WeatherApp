import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = "fa9b945607c2473efbb543665acd89c6"
  uri: string = ""
  constructor(private http:HttpClient) { }
  getFromUserSelection(city:string){
    this.uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    return this.http.get(this.uri)
  }
}
