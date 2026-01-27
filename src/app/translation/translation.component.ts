import { Injectable } from '@angular/core';

export type Lang = 'en' | 'de';

type Dict = Record<string, string>;
type Translations = Record<Lang, Dict>;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly STORAGE_KEY = 'lang';

  private readonly translations: Translations = {
    en: {
      'nav.about': 'About me',
      'nav.skills': 'Skills',
      'nav.portfolio': 'Portfolio',
      'lang.de': 'DE',
      'lang.en': 'EN',
      'hero.iam': 'I am',
      'hero.subtitle': 'FRONTEND DEVELOPER',
      'hero.cta': "Let's talk",
      'hero.scrolldown': 'Scroll down',
      'about.title': 'About Me',
      'about.intro': `Hi, I am a Junior Front-End Developer based in Ruhpolding, Germany.
        After 12 years of military service, including leadership experience as a Deputy Platoon Leader and three international deployments, I decided to pursue my long-standing passion for technology and programming.

        During my career in the military, I developed strong skills in teamwork, responsibility, discipline, and problem-solving - qualities that I now apply to software development.

        Through my training at Developer Akademie, I gained hands-on experience in building modern web applications using Angular and JavaScript. What started as an interest has grown into a true passion, and I am excited to begin my professional career in IT.`,
      'about.block1': `I am excited to take the next step in my career as a Junior Web Developer and become part of a motivated and collaborative team.
        My goal is to continuously grow my skills while contributing to meaningful projects and developing modern, user-friendly, and visually appealing applications.`,
      'about.block2': `If you think I could be a valuable addition to your team and projects, I would be happy to connect.
      Lets discuss how we can work together to create effective and high-quality web solutions.
      Feel free to get in touch at any time.`,
      'about.bulbAlt': 'Idea',
      'about.puzzleAlt': 'Puzzle',
      'about.profileAlt': 'Profile image',
    },
    de: {
      'nav.about': 'Über mich',
      'nav.skills': 'Skills',
      'nav.portfolio': 'Portfolio',
      'lang.de': 'DE',
      'lang.en': 'EN',
      'hero.iam': 'Ich bin',
      'hero.subtitle': 'FRONTEND DEVELOPER',
      'hero.cta': 'Let’s talk',
      'hero.scrolldown': 'herunter Scrollen',
      'about.title': 'Über mich',
      'about.intro': `Hi, ich bin ein Junior Front-End Developer aus Ruhpolding, Deutschland.
        Nach 12 Jahren Dienstzeit bei der Bundeswehr – darunter Führungserfahrung als stellvertretender Zugführer und drei Auslandseinsätze – habe ich mich entschieden, meiner langjährigen Leidenschaft für Technologie und Programmierung beruflich zu folgen.

      Während meiner Zeit beim Militär konnte ich starke Fähigkeiten in Teamarbeit, Verantwortung, Disziplin und Problemlösung entwickeln – Eigenschaften, die ich heute gezielt in die Softwareentwicklung einbringe.

      Durch meine Weiterbildung bei der Developer Akademie habe ich praxisnahe Erfahrung in der Entwicklung moderner Webanwendungen mit Angular und JavaScript gesammelt. Aus einem Interesse ist echte Begeisterung geworden – und ich freue mich darauf, meine berufliche Zukunft in der IT zu starten.`,
      'about.block1': `Ich freue mich darauf, den nächsten Schritt in meiner Karriere als Junior Web Developer zu gehen und Teil eines motivierten und kollaborativen Teams zu werden.
        Mein Ziel ist es, meine Fähigkeiten kontinuierlich weiterzuentwickeln, während ich zu sinnvollen Projekten beitrage und moderne, benutzerfreundliche sowie visuell ansprechende Anwendungen mitgestalte.`,
      'about.block2': `Wenn du denkst, dass ich eine wertvolle Ergänzung für dein Team und eure Projekte sein könnte, freue ich mich über eine Kontaktaufnahme.
        Lass uns darüber sprechen, wie wir gemeinsam effektive und hochwertige Web-Lösungen entwickeln können.
        Du kannst mich jederzeit gerne kontaktieren.`,
      'about.bulbAlt': 'Idee',
      'about.puzzleAlt': 'Puzzle',
      'about.profileAlt': 'Profilbild',
    },
  };

  lang: Lang = 'en';

  constructor() {
    const stored = localStorage.getItem(this.STORAGE_KEY) as Lang | null;
    if (stored === 'de' || stored === 'en') {
      this.lang = stored;
    } else {
      localStorage.setItem(this.STORAGE_KEY, this.lang);
    }
  }

  setLang(lang: Lang): void {
    this.lang = lang;
    localStorage.setItem(this.STORAGE_KEY, lang);
  }

  t(key: string): string {
    return this.translations[this.lang][key] ?? key;
  }
}