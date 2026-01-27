import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { TranslationService } from '../../translation/translation.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  constructor(public i18n: TranslationService) {}

  t(key: string): string {
    return this.i18n.t(key);
  }

  scrollToContact(): void {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}