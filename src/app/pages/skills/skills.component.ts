import { Component } from '@angular/core';
import { TranslationService } from '../../translation/translation.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
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
