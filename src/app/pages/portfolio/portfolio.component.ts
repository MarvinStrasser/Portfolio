import { Component } from '@angular/core';
import { JoinComponent } from '../../projects/join/join.component';
import { PolloLocoComponent } from '../../projects/pollo-loco/pollo-loco.component';
import { TranslationService } from '../../translation/translation.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, PolloLocoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(public t: TranslationService) {}
}