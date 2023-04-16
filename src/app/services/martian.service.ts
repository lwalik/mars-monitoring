import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MartianModel } from '../models/martian.model';

@Injectable()
export class MartianService {
  add(martial: Omit<MartianModel, 'id' | 'workingState'>): Observable<void> {
    return of(void 0)
  }

  getAll(): Observable<MartianModel[]> {
    return of([])
  }
}
