import { Component } from '@angular/core';
import { TranslationService } from '../../translation/translation.component';

@Component({
  selector: 'app-pollo-loco',
  standalone: true,
  templateUrl: './pollo-loco.component.html',
  styleUrl: './pollo-loco.component.scss'
})
export class PolloLocoComponent {
  constructor(public t: TranslationService) {}
}