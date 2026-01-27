import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslationService, Lang } from '../../translation/translation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  menuOpen = false;

  constructor(private router: Router, public i18n: TranslationService) {}

  ngAfterViewInit(): void {
    // 1) Direkt einmal versuchen
    this.initActiveSectionObserver();

    // 2) Und nach jeder Navigation nochmal (wichtig wegen router-outlet)
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this.initActiveSectionObserver(), 0);
      });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private initActiveSectionObserver(): void {
    this.observer?.disconnect();

    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link'));

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
      { threshold: 0.25 }
    );

    sections.forEach((s) => this.observer!.observe(s));
  }

  // === Language (via service + localStorage) ===
  get activeLang(): Lang {
    return this.i18n.lang;
  }

  setLang(lang: Lang): void {
    this.i18n.setLang(lang);
  }

  t(key: string): string {
    return this.i18n.t(key);
  }

  // === Burger ===
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  onNavClick(sectionId: string): void {
    this.setActiveLink(sectionId);
    this.closeMenu();
  }

  private setActiveLink(sectionId: string): void {
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link'));
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.dataset['section'] === sectionId);
    });
  }
}