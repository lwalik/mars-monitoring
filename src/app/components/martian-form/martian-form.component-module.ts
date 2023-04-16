import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MartianFormComponent } from './martian-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, MatChipsModule, MatRadioModule],
  declarations: [MartianFormComponent],
  providers: [],
  exports: [MartianFormComponent]
})
export class MartianFormComponentModule {
}
