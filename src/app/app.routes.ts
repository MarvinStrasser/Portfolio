import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { SocialLinksComponent } from './social-links/social-links.component';

import { JoinComponent } from './projects/join/join.component';
import { PolloLocoComponent } from './projects/pollo-loco/pollo-loco.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  //einzelne seiten
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },

  // Projekt-Detailseiten (zum Testen & für Portfolio-Buttons)
  { path: 'projects/join', component: JoinComponent },
  { path: 'projects/pollo-loco', component: PolloLocoComponent },

  { path: '**', redirectTo: '' },
];