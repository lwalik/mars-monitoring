import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { NavLinkModel } from '../../models/nav-link.model';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  templateUrl: './nav.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  readonly navLinks$: Observable<NavLinkModel[]> =
    this._navigationService.getAll();

  constructor(private _navigationService: NavigationService) {}
}
