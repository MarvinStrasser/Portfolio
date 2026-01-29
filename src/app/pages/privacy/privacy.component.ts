import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../translation/translation.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  constructor(public tr: TranslationService) {}

  t(key: string): string {
    return this.tr.t(key);
  }
}