import { Component } from '@angular/core';
import { TranslationService } from '../../translation/translation.component';
import { RevealHeadlineDirective } from '../../shared/directives/reveal-headline.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealHeadlineDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public t: TranslationService) { }

  scrollToSection(): void {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
