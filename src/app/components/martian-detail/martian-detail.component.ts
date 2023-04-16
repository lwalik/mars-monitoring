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
        id: 'Test',
        name: 'Test',
        lastName: 'Test',
        imageUrl: '//unsplash.it/300/300',
        skills: ['skill1', 'skill2', 'skill3'],
        sex: 'male',
        experienceInSpace: 'experienced',
        workingState: 'test',
      }))
    );

  constructor(private _activatedRoute: ActivatedRoute) {}
}
