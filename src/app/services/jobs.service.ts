import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JobModel } from '../models/job.model';

const JOBS: JobModel[] = [
  {
    id: 1,
    name: 'Sadzenie warzyw',
    description: 'Praca polega na sadzeniu warzyw',
    employeeIds: [],
    requiredSkills: ['Ogrodnictwo'],
  },
  {
    id: 1,
    name: 'Budowanie domów',
    description: 'Praca polega na budowaniu domów',
    employeeIds: [],
    requiredSkills: ['Budownictwo'],
  },
  {
    id: 1,
    name: 'Hodowla bydła',
    description: 'Praca polega na hodowli bydła',
    employeeIds: [],
    requiredSkills: ['Siła'],
  },
];

@Injectable({ providedIn: 'root' })
export class JobsService {
  getAll(): Observable<JobModel[]> {
    return of(JOBS);
  }
}
