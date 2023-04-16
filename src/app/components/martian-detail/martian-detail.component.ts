import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MartianModel } from '../../models/martian.model';
import { Observable, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-martian-detail',
  styleUrls: ['./martian-detail.component.scss'],
  templateUrl: './martian-detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MartianDetailComponent {
  readonly martian$: Observable<MartianModel> =
    this._activatedRoute.params.pipe(
      switchMap((params: Params) => of(params['id'])),
      map(() => ({
        id: '1',
        name: 'Marek',
        lastName: 'Skwarek',
        imageUrl: '/assets/martian.jpeg',
        skills: ['Grows up of potatos'],
        sex: 'Male',
        experienceInSpace: '23000 hours',
        workingState: 'potatoes',
      }))
    );

  constructor(private _activatedRoute: ActivatedRoute) {}
}
