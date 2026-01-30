import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { TranslationService, Lang } from '../../translation/translation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private destroy$ = new Subject<void>();
  menuOpen = false;
  constructor(private router: Router, public i18n: TranslationService) { }
  ngAfterViewInit(): void {
    this.initActiveSectionObserver();
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        setTimeout(() => this.initActiveSectionObserver(), 0);
      });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initActiveSectionObserver(): void {
    this.observer?.disconnect();
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link'));
    if (!sections.length || !navLinks.length) return;
    const linkTargetId = (link: HTMLAnchorElement): string | null => {
      const href = link.getAttribute('href')?.trim() ?? '';
      if (!href.startsWith('#') || href.length < 2) return null;
      return href.slice(1);
    };
    const setActive = (activeId: string): void => {
      navLinks.forEach((link) => {
        const targetId = linkTargetId(link);
        link.classList.toggle('is-active', targetId === activeId);
      });
    };
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (!visible) return;
        const id = (visible.target as HTMLElement).id;
        setActive(id);
      },
      { threshold: 0.25 }
    );
    sections.forEach((s) => this.observer!.observe(s));
  }

  get activeLang(): Lang {
    return this.i18n.lang;
  }

  setLang(lang: Lang): void {
    this.i18n.setLang(lang);
  }

  t(key: string): string {
    return this.i18n.t(key);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }
}