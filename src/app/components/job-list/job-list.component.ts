import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-list',
  styleUrls: ['./job-list.component.scss'],
  templateUrl: './job-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListComponent {
  readonly jobList$: Observable<JobModel[]> = this._jobsService.getAll();

  constructor(private _jobsService: JobsService) {}
}
