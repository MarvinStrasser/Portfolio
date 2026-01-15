import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    // 1) Direkt einmal versuchen
    this.initActiveSectionObserver();

    // 2) Und nach jeder Navigation nochmal (wichtig wegen router-outlet)
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        // kurz warten bis das neue View im DOM ist
        setTimeout(() => this.initActiveSectionObserver(), 0);
      });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private initActiveSectionObserver(): void {
    // vorherigen Observer clean entfernen
    this.observer?.disconnect();

    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav__link'));

    if (!sections.length || !navLinks.length) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const id = (entry.target as HTMLElement).id;

          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.dataset['section'] === id);
          });
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => this.observer!.observe(s));
  }

  activeLang: 'de' | 'en' = 'en';

  setLang(lang: 'de' | 'en'): void {
    this.activeLang = lang;
  }
}