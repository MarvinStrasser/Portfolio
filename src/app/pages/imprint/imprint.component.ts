import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../translation/translation.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(public tr: TranslationService) {}

  t(key: string): string {
    return this.tr.t(key);
  }
}