import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { SocialLinksComponent } from '../../social-links/social-links.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    SocialLinksComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  scrollToContact(): void {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}

