import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { MartianModel } from '../models/martian.model';

const martians: MartianModel[] = [
  {
    id: '1',
    name: 'Marek',
    lastName: 'Skwarek',
    imageUrl: 'assets/martian.jpeg',
    skills: ['Grows up of potatos'],
    sex: 'Male',
    experienceInSpace: '10 years',
    workingState: '',
  },
  {
    id: '2',
    name: 'Marek',
    lastName: 'Skwarek',
    imageUrl: 'assets/martian.jpeg',
    skills: ['Grows up of potatos'],
    sex: 'Male',
    experienceInSpace: '5 years',
    workingState: '',
  },
];

@Injectable()
export class MartianService {
  private _martiansSubject: BehaviorSubject<MartianModel[]> =
    new BehaviorSubject<MartianModel[]>(martians);
  public martians$: Observable<MartianModel[]> =
    this._martiansSubject.asObservable();

  add(martial: Omit<MartianModel, 'id' | 'workingState'>): Observable<void> {
    return of(void 0);
  }

  getAll(): Observable<MartianModel[]> {
    return this.martians$;
  }
  updateWorkingState(work: string, id: string): Observable<MartianModel[]> {
    return this.martians$.pipe(
      map((martians) =>
        martians.map((martian) => {
          if (martian.id === id) {
            return { ...martian, workingState: work };
          }
          return martian;
        })
      )
    );
  }
}
