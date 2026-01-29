import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../translation/translation.component';

type FieldEl = HTMLInputElement | HTMLTextAreaElement;
type InputType = 'name' | 'email' | 'message' | 'privacy';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
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
  privacyAccepted = false;
  privacyTouched = false;
  requiredAlertPrivacy = false;
  private target!: FieldEl;
  constructor(public t: TranslationService) { }
  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  }

  get formValid(): boolean {
    const nameEl = this.nameField?.nativeElement;
    const emailEl = this.emailField?.nativeElement;
    const msgEl = this.messageField?.nativeElement;
    if (!nameEl || !emailEl || !msgEl) return false;

    return (
      nameEl.value.trim().length > 0 &&
      this.isValidEmail(emailEl.value) &&
      msgEl.value.trim().length > 0 &&
      this.privacyAccepted
    );
  }

  async sendEmail(): Promise<void> {
    const nameEl = this.nameField.nativeElement;
    const emailEl = this.emailField.nativeElement;
    const msgEl = this.messageField.nativeElement;
    if (!this.isFormValid(nameEl, emailEl, msgEl)) return;
    if (!this.privacyAccepted) {
      this.requiredAlertPrivacy = true;
      return;
    }
    this.startSendUi();
    await this.tryPost(nameEl, emailEl, msgEl);
  }

  onPrivacyChange(): void {
    this.privacyTouched = true;
    this.requiredAlertPrivacy = !this.privacyAccepted;
  }

  private async tryPost(
    nameEl: HTMLInputElement,
    emailEl: HTMLInputElement,
    msgEl: HTMLTextAreaElement
  ): Promise<void> {
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

  private isFormValid(
    nameEl: HTMLInputElement,
    emailEl: HTMLInputElement,
    msgEl: HTMLTextAreaElement
  ): boolean {
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
      this.privacyAccepted = false;
      this.privacyTouched = false;
      this.requiredAlertPrivacy = false;
    }, 3000);
  }

  private createFormData(
    nameEl: HTMLInputElement,
    emailEl: HTMLInputElement,
    msgEl: HTMLTextAreaElement
  ): FormData {
    const formData = new FormData();
    formData.append('name', nameEl.value);
    formData.append('email', emailEl.value);
    formData.append('message', msgEl.value);
    return formData;
  }

  private async postMail(formData: FormData): Promise<void> {
    const res = await fetch('https://marvin-strasser.de/api/send_email.php', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json().catch(() => ({ ok: false }));
    if (!res.ok || !data?.ok) throw new Error('Mail not sent');
  }

  onBlur(event: Event): void {
    this.target = event.target as FieldEl;
    this.checkInputState();
  }

  onInput(inputType: InputType): void {
    this.checkInputState();
    this.checkInputValue(inputType);
    this.greenCheckMarked(inputType);
  }

  onFocus(event: Event, inputType: InputType): void {
    this.target = event.target as FieldEl;
    if (this.target.value.length !== 0) return;
    this.target.classList.remove('bg-warning');
    this.showRequiredTextOnFocus(inputType);
  }

  private checkInputState(): void {
    const isEmail = this.target?.getAttribute('name') === 'email';
    const valid = isEmail ? this.isValidEmail(this.target.value) : this.target.value.length > 0;
    if (valid) this.changeInputFieldsGreen();
    else this.changeInputFieldsRed();
  }

  private checkInputValue(inputType: InputType): void {
    const valid =
      inputType === 'email'
        ? this.isValidEmail(this.target.value)
        : this.target.value.length > 0;
    if (valid) this.showRequiredMessage(inputType);
    else this.hideRequiredMessage(inputType);
  }

  private greenCheckMarked(inputType: InputType): void {
    const valid =
      inputType === 'email'
        ? this.isValidEmail(this.target.value)
        : this.target.value.length > 0;
    this.setGreenCheck(inputType, valid);
  }

  private setGreenCheck(inputType: InputType, value: boolean): void {
    if (inputType === 'name') this.greenCheckMarkName = value;
    if (inputType === 'email') this.greenCheckMarkEmail = value;
    if (inputType === 'message') this.greenCheckMarkMessage = value;
  }

  private changeInputFieldsGreen(): void {
    this.target.classList.add('content-filled');
    this.target.classList.remove('empty-content');
    this.target.classList.remove('bg-warning');
  }

  private changeInputFieldsRed(): void {
    this.target.classList.remove('content-filled');
    this.target.classList.add('empty-content');
    this.target.classList.add('bg-warning');
  }

  private setRequiredAlert(inputType: InputType, value: boolean): void {
    if (inputType === 'name') this.requiredAlertName = value;
    if (inputType === 'email') this.requiredAlertEmail = value;
    if (inputType === 'message') this.requiredAlertMessage = value;
    if (inputType === 'privacy') this.requiredAlertPrivacy = value;
  }

  private showRequiredMessage(inputType: InputType): void {
    this.setRequiredAlert(inputType, false);
  }

  private hideRequiredMessage(inputType: InputType): void {
    this.setRequiredAlert(inputType, true);
  }

  private showRequiredTextOnFocus(inputType: InputType): void {
    this.setRequiredAlert(inputType, true);
  }

  scrollToSection(): void {
    const top = document.getElementById('landing-page');
    top?.scrollIntoView({ behavior: 'smooth' });
  }

  private resetForm(): void {
    this.myForm.nativeElement.reset();

    this.emailSent = false;
    this.showSpanMsg = false;
    this.addClassToButton = false;
    this.privacyAccepted = false;
    this.privacyTouched = false;
    this.requiredAlertPrivacy = false;
    this.clearFieldClasses(this.nameField.nativeElement);
    this.clearFieldClasses(this.emailField.nativeElement);
    this.clearFieldClasses(this.messageField.nativeElement);
  }

  private clearFieldClasses(field: FieldEl): void {
    field.classList.remove('content-filled', 'empty-content', 'bg-warning');
  }
}