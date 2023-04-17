import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MartianModel } from '../models/martian.model';

// const martians: MartianModel[] = [
//   {
//     id: '1',
//     name: 'Marek',
//     lastName: 'Skwarek',
//     imageUrl: 'assets/martian.jpeg',
//     skills: ['Grows up of potatos'],
//     sex: 'Male',
//     experienceInSpace: '10 years',
//     workingState: '',
//   },
//   {
//     id: '2',
//     name: 'Marek',
//     lastName: 'Skwarek',
//     imageUrl: 'assets/martian.jpeg',
//     skills: ['Grows up of potatos'],
//     sex: 'Male',
//     experienceInSpace: '5 years',
//     workingState: '',
//   },
// ];

@Injectable()
export class MartianService {
  private _martiansSubject: BehaviorSubject<MartianModel[]> =
    new BehaviorSubject<MartianModel[]>(
      JSON.parse(localStorage.getItem('martians') as string)
    );
  public martians$: Observable<MartianModel[]> =
    this._martiansSubject.asObservable();

  add(martial: Omit<MartianModel, 'id' | 'workingState'>): Observable<void> {
    if (!localStorage.getItem('martians')) {
      localStorage.setItem('martians', JSON.stringify([martial]));
    } else {
      localStorage.setItem(
        'martians',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('martians') as string),
          { ...martial, id: Math.random() * 100 },
        ])
      );
    }

    return of(void 0);
  }

  getAll(): Observable<MartianModel[]> {
    return this.martians$;
  }
  updateWorkingState(currentJob: {
    work: string;
    id: string;
  }): Observable<MartianModel[]> {
    // console.log(currentJob.work, currentJob.id);
    return this.martians$.pipe(
      map((martians) => {
        // console.log(martians);
        return martians.map((martian) => {
          if (martian.id === currentJob.id) {
            // console.log({ ...martian, workingState: currentJob.work });
            // localStorage.setItem(
            //   'martians',
            //   JSON.stringify([
            //     ...martians,
            //     { ...martian, workingState: currentJob.work },
            //   ])
            // );
            return { ...martian, workingState: currentJob.work };
          }
          return martian;
        });
      }),
      tap((martians) =>
        localStorage.setItem('martians', JSON.stringify(martians))
      )
    );
  }
}
