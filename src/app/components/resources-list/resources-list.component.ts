import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceModel } from '../../models/resource.model';
import { ResourcesService } from '../../services/resources.service';

@Component({
  selector: 'app-resources-list',
  styleUrls: ['./resources-list.component.scss'],
  templateUrl: './resources-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcesListComponent {

  readonly resourcesList$: Observable<ResourceModel[]> = this._resourcesService.getAll();
  

  constructor(private _resourcesService: ResourcesService) {
  }
}
