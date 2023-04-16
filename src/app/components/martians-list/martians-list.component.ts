import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-martians-list',
  styleUrls: ['./martians-list.component.scss'],
  templateUrl: './martians-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MartiansListComponent {
  readonly maritans: Observable<
    {
      name: string;
      lastName: string;
      imageUrl: string;
      skills: string[];
      sex: string;
      experienceInSpace: string;
      workingState: string;
    }[]
  > = of([]);
}
