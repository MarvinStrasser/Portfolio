import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../../social-links/social-links.component';
import { TranslationService } from '../../translation/translation.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public i18n: TranslationService) {}

  t(key: string): string {
    return this.i18n.t(key);
  }
}