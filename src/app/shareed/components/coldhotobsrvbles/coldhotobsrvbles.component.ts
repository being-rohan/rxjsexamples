import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, observable, Subject } from 'rxjs';

@Component({
  selector: 'app-coldhotobsrvbles',
  templateUrl: './coldhotobsrvbles.component.html',
  styleUrls: ['./coldhotobsrvbles.component.scss']
})
export class ColdhotobsrvblesComponent implements OnInit {
  historicalPrices: string[] | null = null; // For historical prices
  liveUpdates: string[] = []; // For real-time updates

  constructor() {
    // Subscribe to the Hot Observable
    realTimePriceUpdates.subscribe((update: string) => {
      this.liveUpdates.push(update); // Add live update
    });
  }

  ngOnInit(): void {
    console.log('StockComponent initialized');
  }

  fetchStock(stock: string): void {
    // Subscribe to the Cold Observable
    fetchHistoricalPrices(stock).subscribe((prices: string[]) => {
      this.historicalPrices = prices;
    });
  }
}

// Mock APIs
const fetchHistoricalPrices = (stock: string): Observable<string[]> => {
  return new Observable((observer) => {
    const prices = [`${stock} Price 1`, `${stock} Price 2`, `${stock} Price 3`];
    setTimeout(() => {
      observer.next(prices);
      observer.complete();
    }, 1000);
  });
};

const realTimePriceUpdates = new Subject<string>();
interval(2000)
  .pipe(map(() => `Live Update: Price ${Math.floor(Math.random() * 100)}`))
  .subscribe(realTimePriceUpdates);



  // Cold Observable (Historical Prices)
  // Definition: A Cold Observable starts emitting values only when a subscriber subscribes. 
  // It produces independent data streams for each subscription.

  // Hot Observable (Real-Time Updates)
// Definition: A Hot Observable emits values regardless of whether there are subscribers.
//  All subscribers share the same stream, and late subscribers may miss some emitted values




// Functionality	Observable Type	Reason
// Fetch historical stock prices	Cold Observable	Each user or button click gets its own data stream.
// Display live price updates	Hot Observable	All users receive the same shared updates.
