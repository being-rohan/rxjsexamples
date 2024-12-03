import { Observable, Subject, interval } from 'rxjs';
import { map } from 'rxjs/operators';

// Mock API for fetching historical data (Cold Observable)
const fetchHistoricalPrices = (stock: string): Observable<string[]> => {
  return new Observable((observer) => {
    const prices = [`${stock} Price 1`, `${stock} Price 2`, `${stock} Price 3`];
    setTimeout(() => {
      observer.next(prices);
      observer.complete();
    }, 1000); // Simulate network delay
  });
};

// Subject for broadcasting real-time updates (Hot Observable)
const realTimePriceUpdates = new Subject<string>();

// Emit real-time updates every 2 seconds
interval(2000).pipe(
  map(() => `Live Update: Price ${Math.floor(Math.random() * 100)}`)
).subscribe(realTimePriceUpdates);
