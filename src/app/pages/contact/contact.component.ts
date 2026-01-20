import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // Erlaubt dynamische Zugriffe wie this["requiredAlertName"]
  [key: string]: any;

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendbutton') sendbutton!: ElementRef;

  requiredAlertName = false;
  requiredAlertEmail = false;
  requiredAlertMessage = false;

  greenCheckMarkName = false;
  greenCheckMarkEmail = false;
  greenCheckMarkMessage = false;

  emailSent = false;
  showSpanMsg = false;
  addClassToButton = false;

  target!: HTMLInputElement;

  constructor() { }

  async sendEmail() {
    this.emailSent = true;

    setTimeout(() => {
      this.showSpanMsg = true;
      this.addClassToButton = true;
    }, 800);

    const nameInput = this.nameField.nativeElement;
    const emailInput = this.emailField.nativeElement;
    const messageInput = this.messageField.nativeElement;

    const formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('email', emailInput.value);
    formData.append('message', messageInput.value);

    await fetch('https://marvin-strasser.de/api/send_email.php', {
      method: 'POST',
      body: formData
    });

    setTimeout(() => {
      this.resetForm();
      this.greenCheckMarkName = false;
      this.greenCheckMarkEmail = false;
      this.greenCheckMarkMessage = false;
    }, 3000);
  }

  onBlur(event: Event) {
    this.target = event.target as HTMLInputElement;
    this.checkInputState();
  }

  checkInputState() {
    if (this.target.value.length > 0) {
      this.changeInputFieldsGreen();
    } else {
      this.changeInputFieldsRed();
    }
  }

  changeInputFieldsGreen() {
    this.target.classList.add('content-filled');
    this.target.classList.remove('empty-content');
    this.target.classList.remove('bg-warning');
  }

  changeInputFieldsRed() {
    this.target.classList.remove('content-filled');
    this.target.classList.add('empty-content');
    this.target.classList.add('bg-warning');
  }

  onInput(inputType: string) {
    this.checkInputState();
    this.checkInputValue(inputType);
    this.greenCheckMarked(inputType);
  }

  checkInputValue(inputType: string) {
    if (this.target.value.length > 0) {
      this.showRequiredMessage(inputType);
    } else {
      this.hideRequiredMessage(inputType);
    }
  }

  showRequiredMessage(inputType: string) {
    const property = 'requiredAlert' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[property] = false;
  }

  hideRequiredMessage(inputType: string) {
    const property = 'requiredAlert' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[property] = true;
  }

  greenCheckMarked(inputType: string) {
    const property = 'greenCheckMark' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[property] = this.target.value.length > 0;
  }

  onFocus(event: Event, inputType: string) {
    this.target = event.target as HTMLInputElement;

    if (this.target.value.length === 0) {
      this.target.classList.remove('bg-warning');
      this.showRequiredTextOnFocus(inputType);
    }
  }

  showRequiredTextOnFocus(inputType: string) {
    const property = 'requiredAlert' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[property] = true;
  }

  scrollToSection() {
    const top = document.getElementById('header');
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    }
  }

  resetForm() {
    this.myForm.nativeElement.reset();

    this.emailSent = false;
    this.showSpanMsg = false;
    this.addClassToButton = false;

    this.nameField.nativeElement.classList.remove('content-filled');
    this.emailField.nativeElement.classList.remove('content-filled');
    this.messageField.nativeElement.classList.remove('content-filled');
  }
}