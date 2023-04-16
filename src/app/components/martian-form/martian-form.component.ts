import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MartianService } from '../../services/martian.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-martian-form',
  styleUrls: ['./martian-form.component.scss'],
  templateUrl: './martian-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MartianFormComponent {
  readonly form = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    imageUrl: new FormControl(),
    skills: new FormControl([]),
    sex: new FormControl(),
    experience: new FormControl(),
  });
  separatorKeysCodes: number[] = [ENTER, COMMA];

  get skills(): string[] {
    return this.form.controls.skills.value || [];
  }

  constructor(private _martianService: MartianService) {
  }

  onFormSubmitted(): void {
    this._martianService.add({
      name: this.form.value.name || '',
      lastName: this.form.value.lastName || '',
      sex: this.form.value.sex,
      imageUrl: this.form.value.imageUrl || '',
      skills: this.form.value.skills || [],
      experienceInSpace: this.form.value.experience || 0,
    }).subscribe()
  }
}
