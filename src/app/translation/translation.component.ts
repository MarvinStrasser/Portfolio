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
      'contact.privacyLeft': 'I´ve read the',
      'contact.privacyLink': 'privacy policy',
      'contact.privacyRight': 'and agree to the processing of my data as outlined.',
      'contact.privacyReq': 'Please accept the privacy policy.',
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

      'privacy.title': 'Privacy Policy',

      'privacy.section1.title': '1. Data protection at a glance',

      'privacy.section1.general.title': 'General information',
      'privacy.section1.general.p1':
        'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.',
      'privacy.section1.general.p2':
        'Detailed information on the subject of data protection can be found in our privacy policy listed below this text.',

      'privacy.section1.collection.title': 'Data collection on this website',

      'privacy.section1.responsible-question.title':
        'Who is responsible for data collection on this website?',
      'privacy.section1.responsible-question.p1':
        'Data processing on this website is carried out by the website operator. You can find their contact details in the section “Notice regarding the responsible body” in this privacy policy.',

      'privacy.section1.how.title': 'How do we collect your data?',
      'privacy.section1.how.p1':
        'On the one hand, your data is collected when you provide it to us. This may, for example, be data that you enter into a contact form.',
      'privacy.section1.how.p2':
        'Other data is collected automatically or after your consent when visiting the website by our IT systems. This is mainly technical data (e.g. internet browser, operating system or time of page access). This data is collected automatically as soon as you enter this website.',

      'privacy.section1.purpose.title': 'What do we use your data for?',
      'privacy.section1.purpose.p1':
        'Some of the data is collected to ensure error-free provision of the website. Other data can be used to analyze your user behavior.',
      'privacy.section1.purpose.p2':
        'If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders or other inquiries.',

      'privacy.section1.rights.title': 'What rights do you have regarding your data?',
      'privacy.section1.rights.p1':
        'You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data.',
      'privacy.section1.rights.p2':
        'You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. In addition, you have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the competent supervisory authority. You can contact us at any time regarding this and further questions on the topic of data protection.',

      'privacy.section2.title': '2. Hosting',
      'privacy.section2.intro': 'We host the contents of our website with the following provider:',

      'privacy.section2.provider.name': 'All-Inkl',
      'privacy.section2.provider.company':
        'Provider is ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich',
      'privacy.section2.provider.address':
        'Hauptstraße 68, 02742 Friedersdorf (hereinafter “All-Inkl”).',
      'privacy.section2.provider.detailsText':
        'For details, please refer to the privacy policy of All-Inkl:',
      'privacy.section2.provider.detailsLinkText': 'All-Inkl privacy information',

      'privacy.section2.legal.p1':
        'The use of All-Inkl is based on Art. 6 (1) lit. f GDPR. We have a legitimate interest in the most reliable presentation of our website possible.',
      'privacy.section2.legal.p2':
        'If corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6 (1) lit. a GDPR and § 25 (1) TDDDG, insofar as the consent includes the storage of cookies or access to information on the user’s end device (e.g. device fingerprinting) within the meaning of the TDDDG. This consent can be revoked at any time.',

      'privacy.section3.title': '3. General information and mandatory information',

      'privacy.section3.data-protection.title': 'Data protection',
      'privacy.section3.data-protection.p1':
        'The operators of these pages take the protection of your personal data very seriously.',
      'privacy.section3.data-protection.p2':
        'We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.',
      'privacy.section3.data-protection.p3':
        'When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you.',
      'privacy.section3.data-protection.p4':
        'This privacy policy explains which data we collect and what we use it for. It also explains how and for what purpose this is done. We would like to point out that data transmission on the internet (e.g. communication by email) can have security gaps. Complete protection of data against access by third parties is not possible.',

      'privacy.section3.responsible.title': 'Notice regarding the responsible body',
      'privacy.section3.responsible.intro':
        'The responsible body for data processing on this website is:',

      'privacy.section3.responsible.name': 'Marvin Straßer',
      'privacy.section3.responsible.street': 'Innerlohenerstraße 11',
      'privacy.section3.responsible.city': '83324 Ruhpolding',
      'privacy.section3.responsible.phone': 'Phone: [Phone number of the responsible body]',
      'privacy.section3.responsible.emailLabel': 'Email',
      'privacy.section3.responsible.definition':
        'The responsible body is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, email addresses, etc.).',

      'privacy.section3.storage.title': 'Storage duration',
      'privacy.section3.storage.p1':
        'Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. tax or commercial law retention periods); in the latter case, deletion will take place once these reasons no longer apply.',

      'privacy.section3.legal-bases.title': 'General information on the legal basis for data processing on this website',
      'privacy.section3.legal-bases.p1':
        'If you have consented to data processing, we process your personal data on the basis of Art. 6 (1) lit. a GDPR or Art. 9 (2) lit. a GDPR, provided that special categories of data are processed in accordance with Art. 9 (1) GDPR.',
      'privacy.section3.legal-bases.p2':
        'In the case of explicit consent to the transfer of personal data to third countries, data processing is also carried out on the basis of Art. 49 (1) lit. a GDPR.',
      'privacy.section3.legal-bases.p3':
        'If you have consented to the storage of cookies or access to information in your end device (e.g. via device fingerprinting), data processing is additionally carried out on the basis of § 25 (1) TDDDG. Consent can be revoked at any time. If your data is required for contract fulfillment or for carrying out pre-contractual measures, we process your data on the basis of Art. 6 (1) lit. b GDPR. Furthermore, we process your data if this is necessary to fulfill a legal obligation on the basis of Art. 6 (1) lit. c GDPR. Data processing may also be based on our legitimate interest pursuant to Art. 6 (1) lit. f GDPR. The relevant legal basis is explained in the following sections of this privacy policy.',

      'privacy.section3.recipients.title': 'Recipients of personal data',
      'privacy.section3.recipients.p1':
        'As part of our business activities, we work with various external parties. In some cases, it is also necessary to transfer personal data to these external parties.',
      'privacy.section3.recipients.p2':
        'We only pass on personal data to external parties if this is necessary in the context of contract fulfillment, if we are legally obliged to do so (e.g. passing on data to tax authorities), if we have a legitimate interest pursuant to Art. 6 (1) lit. f GDPR in passing on the data or if another legal basis permits data transfer. When using processors, we only pass on personal data of our customers on the basis of a valid processing contract. In the case of joint processing, a joint processing agreement is concluded.',

      'privacy.section3.withdrawal.title': 'Withdrawal of your consent to data processing',
      'privacy.section3.withdrawal.p1':
        'Many data processing operations are only possible with your explicit consent. You can revoke consent that you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.',

      'privacy.section3.objection.title':
        'Right to object to data collection in special cases and to direct marketing (Art. 21 GDPR)',
      'privacy.section3.objection.p1':
        'IF DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 (1) LIT. E OR F GDPR, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS.',
      'privacy.section3.objection.p2':
        'IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING SERVES THE ASSERTION, EXERCISE OR DEFENSE OF LEGAL CLAIMS. IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS ASSOCIATED WITH SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR DIRECT MARKETING PURPOSES.',

      'privacy.section3.complaint.title': 'Right to lodge a complaint with the competent supervisory authority',
      'privacy.section3.complaint.p1':
        'In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, their place of work or the place of the alleged violation. This right exists without prejudice to other administrative or judicial remedies.',

      'privacy.section3.portability.title': 'Right to data portability',
      'privacy.section3.portability.p1':
        'You have the right to receive data that we process automatically on the basis of your consent or in fulfillment of a contract, and to have it handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done insofar as it is technically feasible.',

      'privacy.section3.access.title': 'Information, correction and deletion',
      'privacy.section3.access.p1':
        'Within the framework of applicable legal provisions, you have the right at any time to obtain free information about your stored personal data, its origin and recipients and the purpose of data processing and, if applicable, a right to correction or deletion of this data. You can contact us at any time regarding this and other questions on the subject of personal data.',

      'privacy.section3.restriction.title': 'Right to restriction of processing',
      'privacy.section3.restriction.p1':
        'You have the right to request the restriction of processing of your personal data. You can contact us at any time. The right to restriction of processing applies in the following cases:',

      'privacy.section3.restriction.li1':
        'If you contest the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the verification, you have the right to request the restriction of processing of your personal data.',
      'privacy.section3.restriction.li2':
        'If the processing of your personal data was/is unlawful, you can request restriction of data processing instead of deletion.',
      'privacy.section3.restriction.li3':
        'If we no longer need your personal data, but you need it to exercise, defend or assert legal claims, you have the right to request restriction of processing instead of deletion.',
      'privacy.section3.restriction.li4':
        'If you have lodged an objection pursuant to Art. 21 (1) GDPR, a balance must be struck between your interests and ours. As long as it has not yet been determined whose interests prevail, you have the right to request restriction of processing of your personal data.',

      'privacy.section3.restriction.p2':
        'If you have restricted the processing of your personal data, these data may — apart from being stored — only be processed with your consent or for the assertion, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a member state.',

      'privacy.section3.ssl.title': 'SSL or TLS encryption',
      'privacy.section3.ssl.p1':
        'This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator.',
      'privacy.section3.ssl.p2':
        'You can recognize an encrypted connection by the fact that the browser address line changes from “http://” to “https://” and by the lock symbol in your browser line.',
      'privacy.section3.ssl.p3':
        'If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.',

      'privacy.section3.ad-mails.title': 'Objection to advertising emails',
      'privacy.section3.ad-mails.p1':
        'The use of contact data published within the scope of the imprint obligation for sending unsolicited advertising and information materials is hereby objected to. The operators of these pages expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as spam emails.',

      'privacy.section4.title': '4. Data collection on this website',
      'privacy.section4.cookies.title': 'Cookies',
      'privacy.section4.cookies.p1':
        'Our websites use so-called “cookies”. Cookies are small data packages and do not cause any damage to your device.',
      'privacy.section4.cookies.p2':
        'They are either stored temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your end device. Session cookies are automatically deleted after the end of your visit. Permanent cookies remain stored on your end device until you delete them yourself or automatic deletion takes place by your web browser.',
      'privacy.section4.cookies.p3':
        'Cookies may originate from us (first-party cookies) or from third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services from third-party companies within websites (e.g. cookies for processing payment services).',
      'privacy.section4.cookies.p4':
        'Cookies have various functions. Many cookies are technically necessary, as certain website functions would not work without them (e.g. shopping cart function or the display of videos). Other cookies can be used to evaluate user behavior or for advertising purposes.',
      'privacy.section4.cookies.p5':
        'Cookies that are required to carry out the electronic communication process, to provide certain functions requested by you (e.g. for the shopping cart function) or to optimize the website (e.g. cookies for measuring web audience) are stored on the basis of Art. 6 (1) lit. f GDPR, unless another legal basis is specified.',
      'privacy.section4.cookies.p6':
        'The website operator has a legitimate interest in storing necessary cookies for the technically error-free and optimized provision of their services.',
      'privacy.section4.cookies.p7':
        'If consent to the storage of cookies and comparable recognition technologies has been requested, processing is carried out exclusively on the basis of this consent (Art. 6 (1) lit. a GDPR and § 25 (1) TDDDG); consent can be revoked at any time.',
      'privacy.section4.cookies.p8':
        'You can set your browser so that you are informed about the setting of cookies and allow cookies only in individual cases, exclude the acceptance of cookies for certain cases or generally, and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of this website may be limited.',
      'privacy.section4.cookies.p9':
        'Which cookies and services are used on this website can be found in this privacy policy.',

      'privacy.section5.title': '5. Plugins and tools',

      'privacy.section5.google-fonts.title': 'Google Fonts (local hosting)',
      'privacy.section5.google-fonts.p1':
        'This site uses so-called Google Fonts, provided by Google, for the uniform display of fonts. The Google Fonts are installed locally. There is no connection to Google servers.',
      'privacy.section5.google-fonts.p2a': 'More information about Google Fonts can be found at',
      'privacy.section5.google-fonts.link1': 'Google Fonts FAQ',
      'privacy.section5.google-fonts.p2b': 'and in Google’s privacy policy:',
      'privacy.section5.google-fonts.link2': 'Google Privacy Policy',

      'privacy.source.label': 'Source',
      'privacy.source.value': 'https://www.e-recht24.de',

      'privacy.contact.emailHref': 'mailto:marvin.strasser@icloud.com',
      'privacy.contact.emailHtml': 'marvin.strasser&#64;icloud.com',
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
      'contact.privacyLeft': 'Ich habe die',
      'contact.privacyLink': 'Datenschutzerklärung',
      'contact.privacyRight': 'gelesen und stimme der Verarbeitung meiner Daten gemäß den dort beschriebenen Bestimmungen zu.',
      'contact.privacyReq': 'Bitte stimmen Sie der Datenschutzerklärung zu.',
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

      'privacy.title': 'Datenschutzerklärung',

      'privacy.section1.title': '1. Datenschutz auf einen Blick',

      'privacy.section1.general.title': 'Allgemeine Hinweise',
      'privacy.section1.general.p1':
        'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
      'privacy.section1.general.p2':
        'Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',

      'privacy.section1.collection.title': 'Datenerfassung auf dieser Website',

      'privacy.section1.responsible-question.title':
        'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
      'privacy.section1.responsible-question.p1':
        'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.',

      'privacy.section1.how.title': 'Wie erfassen wir Ihre Daten?',
      'privacy.section1.how.p1':
        'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
      'privacy.section1.how.p2':
        'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',

      'privacy.section1.purpose.title': 'Wofür nutzen wir Ihre Daten?',
      'privacy.section1.purpose.p1':
        'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
      'privacy.section1.purpose.p2':
        'Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.',

      'privacy.section1.rights.title': 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
      'privacy.section1.rights.p1':
        'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.',
      'privacy.section1.rights.p2':
        'Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',

      'privacy.section2.title': '2. Hosting',
      'privacy.section2.intro': 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',

      'privacy.section2.provider.name': 'All-Inkl',
      'privacy.section2.provider.company':
        'Anbieter ist die ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich',
      'privacy.section2.provider.address':
        'Hauptstraße 68, 02742 Friedersdorf (nachfolgend „All-Inkl“).',
      'privacy.section2.provider.detailsText':
        'Details entnehmen Sie der Datenschutzerklärung von All-Inkl:',
      'privacy.section2.provider.detailsLinkText': 'Datenschutzinformationen von All-Inkl',

      'privacy.section2.legal.p1':
        'Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.',
      'privacy.section2.legal.p2':
        'Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.',

      'privacy.section3.title': '3. Allgemeine Hinweise und Pflichtinformationen',

      'privacy.section3.data-protection.title': 'Datenschutz',
      'privacy.section3.data-protection.p1':
        'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.',
      'privacy.section3.data-protection.p2':
        'Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
      'privacy.section3.data-protection.p3':
        'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.',
      'privacy.section3.data-protection.p4':
        'Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',

      'privacy.section3.responsible.title': 'Hinweis zur verantwortlichen Stelle',
      'privacy.section3.responsible.intro':
        'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',

      'privacy.section3.responsible.name': 'Marvin Straßer',
      'privacy.section3.responsible.street': 'Innerlohenerstraße 11',
      'privacy.section3.responsible.city': '83324 Ruhpolding',
      'privacy.section3.responsible.phone': 'Telefon: [Telefonnummer der verantwortlichen Stelle]',
      'privacy.section3.responsible.emailLabel': 'E-Mail',
      'privacy.section3.responsible.definition':
        'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',

      'privacy.section3.storage.title': 'Speicherdauer',
      'privacy.section3.storage.p1':
        'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',

      'privacy.section3.legal-bases.title':
        'Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website',
      'privacy.section3.legal-bases.p1':
        'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden.',
      'privacy.section3.legal-bases.p2':
        'Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.',
      'privacy.section3.legal-bases.p3':
        'Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.',

      'privacy.section3.recipients.title': 'Empfänger von personenbezogenen Daten',
      'privacy.section3.recipients.p1':
        'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.',
      'privacy.section3.recipients.p2':
        'Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.',

      'privacy.section3.withdrawal.title': 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
      'privacy.section3.withdrawal.p1':
        'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',

      'privacy.section3.objection.title':
        'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
      'privacy.section3.objection.p1':
        'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING.',
      'privacy.section3.objection.p2':
        'WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN. WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET.',

      'privacy.section3.complaint.title': 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
      'privacy.section3.complaint.p1':
        'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',

      'privacy.section3.portability.title': 'Recht auf Datenübertragbarkeit',
      'privacy.section3.portability.p1':
        'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',

      'privacy.section3.access.title': 'Auskunft, Berichtigung und Löschung',
      'privacy.section3.access.p1':
        'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',

      'privacy.section3.restriction.title': 'Recht auf Einschränkung der Verarbeitung',
      'privacy.section3.restriction.p1':
        'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',

      'privacy.section3.restriction.li1':
        'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
      'privacy.section3.restriction.li2':
        'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
      'privacy.section3.restriction.li3':
        'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
      'privacy.section3.restriction.li4':
        'Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',

      'privacy.section3.restriction.p2':
        'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',

      'privacy.section3.ssl.title': 'SSL- bzw. TLS-Verschlüsselung',
      'privacy.section3.ssl.p1':
        'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.',
      'privacy.section3.ssl.p2':
        'Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
      'privacy.section3.ssl.p3':
        'Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',

      'privacy.section3.ad-mails.title': 'Widerspruch gegen Werbe-E-Mails',
      'privacy.section3.ad-mails.p1':
        'Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.',

      'privacy.section4.title': '4. Datenerfassung auf dieser Website',
      'privacy.section4.cookies.title': 'Cookies',
      'privacy.section4.cookies.p1':
        'Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.',
      'privacy.section4.cookies.p2':
        'Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.',
      'privacy.section4.cookies.p3':
        'Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).',
      'privacy.section4.cookies.p4':
        'Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.',
      'privacy.section4.cookies.p5':
        'Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.',
      'privacy.section4.cookies.p6':
        'Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.',
      'privacy.section4.cookies.p7':
        'Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.',
      'privacy.section4.cookies.p8':
        'Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.',
      'privacy.section4.cookies.p9':
        'Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.',

      'privacy.section5.title': '5. Plugins und Tools',
      'privacy.section5.google-fonts.title': 'Google Fonts (lokales Hosting)',
      'privacy.section5.google-fonts.p1':
        'Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.',
      'privacy.section5.google-fonts.p2a': 'Weitere Informationen zu Google Fonts finden Sie unter',
      'privacy.section5.google-fonts.link1': 'Google Fonts FAQ',
      'privacy.section5.google-fonts.p2b': 'und in der Datenschutzerklärung von Google:',
      'privacy.section5.google-fonts.link2': 'Google Datenschutzerklärung',

      'privacy.source.label': 'Quelle',
      'privacy.source.value': 'https://www.e-recht24.de',

      'privacy.contact.emailHref': 'mailto:marvin.strasser@icloud.com',
      'privacy.contact.emailHtml': 'marvin.strasser&#64;icloud.com',
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