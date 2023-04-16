import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { MartianModel } from 'src/app/models/martian.model';

@Component({
  selector: 'app-martians-list',
  styleUrls: ['./martians-list.component.scss'],
  templateUrl: './martians-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MartiansListComponent {
  readonly maritans$: Observable<
    {
      fullName: string;
      imageUrl: string;
      experienceInSpace: string;
      workingState: string;
    }[]
  > = of([
    {
      id: '1',
      name: 'Marek',
      lastName: 'Skwarek',
      imageUrl: 'assets/martian.jpeg',
      skills: ['Grows up of potatos'],
      sex: 'Male',
      experienceInSpace: '23000 hours',
      workingState: 'potatoes',
    },
  ]).pipe(
    map((martians) =>
      martians.map((martian) => ({
        fullName: ` ${martian.name} ${martian.lastName}`,
        imageUrl: martian.imageUrl,
        experienceInSpace: martian.experienceInSpace,
        workingState: martian.workingState,
      }))
    )
  );
  public displayedColumns: string[] = [
    'Image',
    'Name',
    'Experience in space',
    'Working state',
    'Details',
  ];
}
