import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApixuService {
  myApiKey: string = 'd306c642da85878202fb49628dacf7ce';

  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        location +
        '&appid=d306c642da85878202fb49628dacf7ce&units=metric'
    );
  }
}
