import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavLinkModel } from '../models/nav-link.model';

const LINKS: NavLinkModel[] = [
  {
    text: 'Home',
    url: '',
  },
  {
    text: 'Resources List',
    url: 'resources-list',
  },
  {
    text: 'Job List',
    url: 'job-list',
  },
  {
    text: 'Martian Form',
    url: 'martian-form',
  },
];

@Injectable({ providedIn: 'root' })
export class NavigationService {
  getAll(): Observable<NavLinkModel[]> {
    return of(LINKS);
  }
}
