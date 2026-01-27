import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation/translation.component';

type FieldEl = HTMLInputElement | HTMLTextAreaElement;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  [key: string]: any;

  @ViewChild('myForm') myForm!: ElementRef<HTMLFormElement>;
  @ViewChild('nameField') nameField!: ElementRef<HTMLInputElement>;
  @ViewChild('emailField') emailField!: ElementRef<HTMLInputElement>;
  @ViewChild('messageField') messageField!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('sendbutton') sendbutton!: ElementRef<HTMLButtonElement>;

  requiredAlertName = false;
  requiredAlertEmail = false;
  requiredAlertMessage = false;

  greenCheckMarkName = false;
  greenCheckMarkEmail = false;
  greenCheckMarkMessage = false;

  emailSent = false;
  showSpanMsg = false;
  addClassToButton = false;

  target!: FieldEl;

  constructor(public t: TranslationService) { }


  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  }

  async sendEmail(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();

    const nameEl = this.nameField.nativeElement;
    const emailEl = this.emailField.nativeElement;
    const msgEl = this.messageField.nativeElement;

    if (!this.isFormValid(nameEl, emailEl, msgEl)) return;

    this.startSendUi();
    await this.tryPost(nameEl, emailEl, msgEl);
  }

  private async tryPost(nameEl: HTMLInputElement, emailEl: HTMLInputElement, msgEl: HTMLTextAreaElement): Promise<void> {
    try {
      await this.postMail(this.createFormData(nameEl, emailEl, msgEl));
      this.finishSendUi();
    } catch {
      this.handleSendError(emailEl);
    }
  }

  private handleSendError(emailEl: HTMLInputElement): void {
    this.emailSent = false;
    this.showSpanMsg = false;
    this.addClassToButton = false;

    this.requiredAlertEmail = true;
    this.greenCheckMarkEmail = false;
    this.setInvalidField(emailEl);
  }


  private isFormValid(nameEl: HTMLInputElement, emailEl: HTMLInputElement, msgEl: HTMLTextAreaElement): boolean {
    if (!this.isNameValid(nameEl)) return false;
    if (!this.isEmailFieldValid(emailEl)) return false;
    if (!this.isMessageValid(msgEl)) return false;
    return true;
  }

  private isNameValid(nameEl: HTMLInputElement): boolean {
    if (nameEl.value.trim().length > 0) return true;
    this.requiredAlertName = true;
    this.greenCheckMarkName = false;
    this.setInvalidField(nameEl);
    return false;
  }

  private isEmailFieldValid(emailEl: HTMLInputElement): boolean {
    if (this.isValidEmail(emailEl.value)) return true;
    this.requiredAlertEmail = true;
    this.greenCheckMarkEmail = false;
    this.setInvalidField(emailEl);
    return false;
  }

  private isMessageValid(msgEl: HTMLTextAreaElement): boolean {
    if (msgEl.value.trim().length > 0) return true;
    this.requiredAlertMessage = true;
    this.greenCheckMarkMessage = false;
    this.setInvalidField(msgEl);
    return false;
  }

  private setInvalidField(field: FieldEl): void {
    field.classList.remove('content-filled');
    field.classList.add('empty-content');
    field.classList.add('bg-warning');
  }

  private startSendUi(): void {
    this.emailSent = true;
    setTimeout(() => {
      this.showSpanMsg = true;
      this.addClassToButton = true;
    }, 800);
  }

  private finishSendUi(): void {
    setTimeout(() => {
      this.resetForm();
      this.greenCheckMarkName = false;
      this.greenCheckMarkEmail = false;
      this.greenCheckMarkMessage = false;
    }, 3000);
  }

  private createFormData(nameEl: HTMLInputElement, emailEl: HTMLInputElement, msgEl: HTMLTextAreaElement): FormData {
    const formData = new FormData();
    formData.append('name', nameEl.value);
    formData.append('email', emailEl.value);
    formData.append('message', msgEl.value);
    return formData;
  }

  private async postMail(formData: FormData): Promise<void> {
    const res = await fetch('https://marvin-strasser.de/api/send_email.php', {
      method: 'POST',
      body: formData
    });

    const data = await res.json().catch(() => ({ ok: false }));
    if (!res.ok || !data?.ok) throw new Error('Mail not sent');
  }

  onBlur(event: Event) {
    this.target = event.target as FieldEl;
    this.checkInputState();
  }

  onInput(inputType: string) {
    this.checkInputState();
    this.checkInputValue(inputType);
    this.greenCheckMarked(inputType);
  }

  onFocus(event: Event, inputType: string) {
    this.target = event.target as FieldEl;
    if (this.target.value.length !== 0) return;

    this.target.classList.remove('bg-warning');
    this.showRequiredTextOnFocus(inputType);
  }

  checkInputState() {
    const isEmail = (this.target as FieldEl)?.getAttribute('name') === 'email';
    const valid = isEmail ? this.isValidEmail(this.target.value) : this.target.value.length > 0;

    if (valid) this.changeInputFieldsGreen();
    else this.changeInputFieldsRed();
  }

  checkInputValue(inputType: string) {
    const valid = inputType === 'email' ? this.isValidEmail(this.target.value) : this.target.value.length > 0;
    if (valid) this.showRequiredMessage(inputType);
    else this.hideRequiredMessage(inputType);
  }

  greenCheckMarked(inputType: string) {
    const prop = 'greenCheckMark' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[prop] = inputType === 'email' ? this.isValidEmail(this.target.value) : this.target.value.length > 0;
  }

  private changeInputFieldsGreen() {
    this.target.classList.add('content-filled');
    this.target.classList.remove('empty-content');
    this.target.classList.remove('bg-warning');
  }

  private changeInputFieldsRed() {
    this.target.classList.remove('content-filled');
    this.target.classList.add('empty-content');
    this.target.classList.add('bg-warning');
  }

  private showRequiredMessage(inputType: string) {
    const prop = 'requiredAlert' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[prop] = false;
  }

  private hideRequiredMessage(inputType: string) {
    const prop = 'requiredAlert' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[prop] = true;
  }

  private showRequiredTextOnFocus(inputType: string) {
    const prop = 'requiredAlert' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[prop] = true;
  }

  scrollToSection() {
    const top = document.getElementById('landing-page');
    top?.scrollIntoView({ behavior: 'smooth' });
  }

  resetForm() {
    this.myForm.nativeElement.reset();

    this.emailSent = false;
    this.showSpanMsg = false;
    this.addClassToButton = false;

    this.clearFieldClasses(this.nameField.nativeElement);
    this.clearFieldClasses(this.emailField.nativeElement);
    this.clearFieldClasses(this.messageField.nativeElement);
  }

  private clearFieldClasses(field: FieldEl): void {
    field.classList.remove('content-filled', 'empty-content', 'bg-warning');
  }
}