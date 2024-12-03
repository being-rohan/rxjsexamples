import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-wethereport',
  templateUrl: './wethereport.component.html',
  styleUrls: ['./wethereport.component.scss']
})
export class WethereportComponent implements OnInit {

  historicalWeather: string[] | null = null; // Store historical weather
  liveUpdates: string[] = []; // Store live weather updates

  constructor() {
    // Subscribe to Hot Observable
    liveWeatherUpdates.subscribe((update: string) => {
      this.liveUpdates.push(update); // Add live updates
    });
  }

  ngOnInit(): void {
    console.log('WeatherComponent initialized');
  }

  fetchWeather(city: string): void {
    // Subscribe to Cold Observable
    fetchHistoricalWeather(city).subscribe((data: string[]) => {
      this.historicalWeather = data; // Update historical weather
    });
  }
}

// Mock APIs
const fetchHistoricalWeather = (city: string): Observable<string[]> => {
  return new Observable((observer) => {
    const data = [
      `${city}: Day 1 - 30°C`,
      `${city}: Day 2 - 32°C`,
      `${city}: Day 3 - 28°C`,
      `${city}: Day 4 - 29°C`,
      `${city}: Day 5 - 27°C`,
    ];
    setTimeout(() => {
      observer.next(data);
      observer.complete();
    }, 1000);
  });
};

const liveWeatherUpdates = new Subject<string>();
interval(5000)
  .pipe(map(() => `Live Update: Temperature is ${Math.floor(Math.random() * 10) + 20}°C`))
  .subscribe(liveWeatherUpdates);