import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSubject = new Subject<void>();

  dataChanged$ = this.dataSubject.asObservable();

  notifyDataChanged() {
    this.dataSubject.next();
  }
}
