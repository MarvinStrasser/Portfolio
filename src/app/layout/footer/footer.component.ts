import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../translation/translation.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public tr: TranslationService) {}
  t(key: string): string { return this.tr.t(key); }
}