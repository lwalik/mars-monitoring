import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { JobModel } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';
import { MartianService } from '../../services/martian.service';

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
      id: string;
    }[]
  > = this._martianService.getAll().pipe(
    map((martians) =>
      martians.map((martian) => ({
        fullName: ` ${martian.name} ${martian.lastName}`,
        imageUrl: martian.imageUrl,
        experienceInSpace: martian.experienceInSpace,
        workingState: martian.workingState,
        id: martian.id,
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
  readonly jobs$: Observable<JobModel[]> = this._jobsService.getAll();
  private _currentJobSubject: Subject<{ work: string; id: string }> =
    new Subject<{ work: string; id: string }>();
  public currentJob$: Observable<{ work: string; id: string }> =
    this._currentJobSubject.asObservable();

  constructor(
    private _jobsService: JobsService,
    private _martianService: MartianService,
    private _cdr: ChangeDetectorRef
  ) {}

  updateWorkingState(work: string, id: string): void {
    console.log('id', id);
    this._currentJobSubject.next({ work, id });
  }
  sendWorkingState(currentJob: { work: string; id: string }): void {
    console.log(currentJob);
    this._martianService.updateWorkingState(currentJob).subscribe();
    this._cdr.markForCheck();
    // return this._currentJobSubject
    //   .asObservable()
    //   .pipe(
    //     map((data) => {
    //       console.log(data);
    // return this._martianService.updateWorkingState(data.work, data.id);
    //   })
    // )
    // .subscribe();
  }
}
