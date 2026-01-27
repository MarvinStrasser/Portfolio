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

      'skills.title': 'Skills',
      'skills.text': 'I have gained experience in building projects with various frontend technologies and concepts',
      'skills.cta': 'Get in touch',

      'portfolio.title': 'Portfolio',
      'portfolio.text': 'This page is a sample of my work - please feel free to try them out.',

      'project.join.alt': 'kanban board image',
      'project.join.desc': `Task management application inspired by the Kanban system.
        Create and organize tasks with drag & drop, assign users and categories, and track progress across boards.`,
      'project.join.live': 'Live test',
      'project.join.github': 'Github',

      'project.pollo.alt': 'jump and run game image',
      'project.pollo.desc': `A simple Jump-and-Run game based on an object-oriented approach.
        Help Pepe to find coins and salsa bottles to fight against the enemy chickens.`,
      'project.pollo.live': 'Live test',
      'project.pollo.github': 'Github',

      'contact.title': 'Contact',
      'contact.headline': 'Got a problem to solve?',
      'contact.text': `Contact me through this form, I am interested in hearing
        you, knowing your ideas and contributing to your projects
        with my work.`,
      'contact.ctaLine': 'Need a Frontend developer?',
      'contact.ctaBold': 'Contact me!',
      'contact.namePh': 'Your name',
      'contact.emailPh': 'Your email',
      'contact.msgPh': 'Your message',
      'contact.nameReq': 'Your name is required',
      'contact.emailReq': 'Your email is required',
      'contact.msgReq': 'Please insert your message',
      'contact.send': 'Send Message',
      'contact.sent': 'Your email has been sent successfully!',
      'contact.scrollUpAlt': 'scroll up button',

      'legal.title': 'Legal Notice',

      'legal.imprint.title': 'Imprint',
      'legal.imprint.name': 'Marvin Straßer',
      'legal.imprint.street': 'Innerlohener Straße 11',
      'legal.imprint.city': '83324 Ruhpolding',

      'legal.exploring.title': 'Exploring the Board',
      'legal.exploring.emailLabel': 'Email',
      'legal.exploring.emailHref': 'mailto:marvin.strasser@icloud.com',
      'legal.exploring.emailHtml': 'marvin.strasser&#64;icloud.com',

      'legal.acceptance.title': 'Acceptance of terms',
      'legal.acceptance.text': 'By accessing and using this Portfolio (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We may update or change these terms and conditions from time to time without notice.',

      'legal.scope.title': 'Scope and ownership of the product',
      'legal.scope.text': 'This Portfolio has been developed as part of a student project in a web development bootcamp. It has an educational purpose and is not intended for extensive personal or business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product. The design is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.',

      'legal.rights.title': 'Proprietary rights',
      'legal.rights.text': 'Aside from the design owned by Developer Akademie GmbH, we retain all proprietary rights in this Portfolio, including any associated copyrighted material, trademarks, and other proprietary information.',

      'legal.use.title': 'Use of the product',
      'legal.use.text': 'This Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use for illegal activities, harassment, harm, threats, or intimidation of another person is strictly prohibited. You are solely responsible for your interactions with other users of this Portfolio.',

      'legal.disclaimer.title': 'Disclaimer of warranties and limitation of liability',
      'legal.disclaimer.text': 'This Portfolio is provided “as is” without warranty of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the listed students or Developer Akademie be liable for any direct, indirect, incidental, special, consequential, or exemplary damages.',

      'legal.indemnity.title': 'Indemnity',
      'legal.indemnity.text': 'You agree to indemnify, defend and hold harmless the listed students and Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability arising out of your use of this Portfolio.',

      'legal.questions.text': 'For any questions or notices, please contact us at',
      'legal.questions.emailHref': 'mailto:marvin.strasser@icloud.com',
      'legal.questions.emailHtml': 'marvin.strasser&#64;icloud.com',

      'legal.date.label': 'Date',
      'legal.date.value': 'January 26. 2026',
    },
    de: {
      'nav.about': 'Über mich',
      'nav.skills': 'Skills',
      'nav.portfolio': 'Portfolio',

      'lang.de': 'DE',
      'lang.en': 'EN',
      'hero.iam': 'Ich bin',
      'hero.subtitle': 'FRONTEND DEVELOPER',
      'hero.cta': 'Kontaktiere mich',
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

      'skills.title': 'Skills',
      'skills.text': 'Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.',
      'skills.cta': 'Kontaktiere mich',

      'portfolio.title': 'Portfolio',
      'portfolio.text': 'Diese Seite zeigt eine Auswahl meiner Projekte – probiere sie gerne aus.',

      'project.join.alt': 'Kanban Board Bild',
      'project.join.desc': `Task-Management-App nach dem Kanban-Prinzip.
        Erstelle und organisiere Aufgaben per Drag & Drop, weise Benutzer und Kategorien zu und behalte den Fortschritt über Boards hinweg im Blick.`,
      'project.join.live': 'Live testen',
      'project.join.github': 'Github',

      'project.pollo.alt': 'Jump and Run Spiel Bild',
      'project.pollo.desc': `Ein einfaches Jump-and-Run-Spiel auf Basis eines objektorientierten Ansatzes.
        Hilf Pepe dabei, Münzen und Salsa-Flaschen zu sammeln, um gegen die feindlichen Hühner zu kämpfen.`,
      'project.pollo.live': 'Live testen',
      'project.pollo.github': 'Github',

      'contact.title': 'Kontakt',
      'contact.headline': 'Hast du ein Problem zu lösen?',
      'contact.text': `Kontaktiere mich über dieses Formular. Ich freue mich darauf,
        von dir zu hören, deine Ideen kennenzulernen und mit meiner Arbeit zu deinen
        Projekten beizutragen.`,
      'contact.ctaLine': 'Du brauchst einen Frontend Developer?',
      'contact.ctaBold': 'Schreib mir!',
      'contact.namePh': 'Dein Name',
      'contact.emailPh': 'Deine E-Mail',
      'contact.msgPh': 'Deine Nachricht',
      'contact.nameReq': 'Name ist erforderlich',
      'contact.emailReq': 'E-Mail ist erforderlich',
      'contact.msgReq': 'Bitte gib eine Nachricht ein',
      'contact.send': 'Nachricht senden',
      'contact.sent': 'Deine Nachricht wurde erfolgreich gesendet!',
      'contact.scrollUpAlt': 'nach oben scrollen',

      'legal.title': 'Rechtliche Hinweise',

      'legal.imprint.title': 'Impressum',
      'legal.imprint.name': 'Marvin Straßer',
      'legal.imprint.street': 'Innerlohener Straße 11',
      'legal.imprint.city': '83324 Ruhpolding',

      'legal.exploring.title': 'Kontakt',
      'legal.exploring.emailLabel': 'E-Mail',
      'legal.exploring.emailHref': 'mailto:marvin.strasser@icloud.com',
      'legal.exploring.emailHtml': 'marvin.strasser&#64;icloud.com',

      'legal.acceptance.title': 'Akzeptanz der Nutzungsbedingungen',
      'legal.acceptance.text': 'Durch den Zugriff und die Nutzung dieses Portfolios (Produkt) erklärst du dich mit den folgenden Bedingungen sowie allen ggf. später ergänzten Richtlinien und Änderungen einverstanden. Die Bedingungen können jederzeit ohne vorherige Ankündigung aktualisiert oder geändert werden.',

      'legal.scope.title': 'Umfang und Eigentum am Produkt',
      'legal.scope.text': 'Dieses Portfolio wurde im Rahmen eines studentischen Projekts in einem Webentwicklung-Bootcamp erstellt. Es dient Ausbildungszwecken und ist nicht für umfangreiche geschäftliche oder private Nutzung vorgesehen. Daher können wir keine dauerhafte Verfügbarkeit, Zuverlässigkeit oder Fehlerfreiheit garantieren. Das Design gehört der Developer Akademie GmbH. Unautorisierte Nutzung, Vervielfältigung, Änderung oder Verbreitung ist untersagt.',

      'legal.rights.title': 'Eigentumsrechte',
      'legal.rights.text': 'Abgesehen vom Design der Developer Akademie GmbH behalten wir alle Rechte an diesem Portfolio, einschließlich zugehöriger Inhalte, Marken und weiterer geschützter Informationen.',

      'legal.use.title': 'Nutzung des Produkts',
      'legal.use.text': 'Dieses Portfolio darf ausschließlich für rechtmäßige Zwecke gemäß geltenden Gesetzen genutzt werden. Jegliche Nutzung für illegale Aktivitäten, Belästigung, Schaden, Drohungen oder Einschüchterung ist untersagt. Du bist selbst verantwortlich für deine Interaktionen.',

      'legal.disclaimer.title': 'Haftungsausschluss',
      'legal.disclaimer.text': 'Dieses Portfolio wird ohne Gewähr („wie es ist“) bereitgestellt. Es wird keine Haftung für direkte oder indirekte Schäden übernommen, die aus der Nutzung oder Nichtverfügbarkeit entstehen können.',

      'legal.indemnity.title': 'Freistellung',
      'legal.indemnity.text': 'Du erklärst dich damit einverstanden, uns sowie ggf. verbundene Partner im Falle von Ansprüchen oder Schäden im Zusammenhang mit der Nutzung dieses Portfolios freizustellen.',

      'legal.questions.text': 'Bei Fragen oder Hinweisen kontaktiere mich bitte unter',
      'legal.questions.emailHref': 'mailto:marvin.strasser@icloud.com',
      'legal.questions.emailHtml': 'marvin.strasser&#64;icloud.com',

      'legal.date.label': 'Datum',
      'legal.date.value': '26. Januar 2026',
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