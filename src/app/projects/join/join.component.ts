import { Component } from '@angular/core';
import { TranslationService } from '../../translation/translation.component';

@Component({
  selector: 'app-join',
  standalone: true,
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
  constructor(public t: TranslationService) {}
}