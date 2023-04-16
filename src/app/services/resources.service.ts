import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResourceModel } from '../models/resource.model';

@Injectable({ providedIn: 'root' })
export class ResourcesService {
 

  getAll(): Observable<ResourceModel[]> {
    return of([{ id: '1',
        name: 'oxygen',
        state: 100,
        minState: 50,
        maxState: 100,
      imageUrl: `https://cdn.pixabay.com/photo/2014/10/25/18/45/oxygen-502887_1280.jpg`}, 
        { id: '2',
        name: 'food',
        state: 50,
        minState: 50,
        maxState: 100,
      imageUrl: `https://cdn.pixabay.com/photo/2016/03/05/21/45/pizza-1239077_1280.jpg`},
        { id: '3',
        name: 'water',
        state: 150,
        maxState: 200,
        minState: 50,
      imageUrl: `https://cdn.pixabay.com/photo/2013/07/19/00/18/splashing-165192__480.jpg`}])

  }
}
