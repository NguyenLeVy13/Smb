import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  onDrop = false;
  contactForm: FormGroup;
  whatWeHelps = [
    {
      value: 1,
      label: '-Hoe kunnen we u helpen?-*',
    },
    {
      value: 2,
      label: 'Vraag een gratis proefperiode voor Unify Phone aan',
    },
    {
      value: 3,
      label: 'Neem contact op met een deskundige',
    },
  ]

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      username: ['', [Validators.required]],
      company: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ], // 10 chữ số
      email: ['', [Validators.required, Validators.email]],
      help: [this.whatWeHelps[0]!.label, Validators.required],
      message: [''],
    });
  }

  onBlurFormInput(formControlName: string, msgErrorId: string) {
    const formControl = this.contactForm.get(formControlName);
    if (!formControl || !formControl.value) {
      const msgError = document.getElementById(msgErrorId);
      if (msgError) {
        msgError.classList.remove('hidden');
      }
    }

    // Validate email
    if (formControlName === 'email' && formControl && formControl.value) {
      if (!formControl.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        const msgError = document.getElementById(msgErrorId);
        if (msgError) {
          msgError.classList.remove('hidden');
        }
      }
    }

    // Validate phone number
    if (formControlName === 'phoneNumber' && formControl && formControl.value) {
      if (!formControl.value.match(/^[0-9]{10}$/)) {
        const msgError = document.getElementById(msgErrorId);
        if (msgError) {
          msgError.classList.remove('hidden');
        }
      }
    }
  }

  onInputFormInput(formControlName: string, msgErrorId: string) {
    const formControl = this.contactForm.get(formControlName);
    if (formControl && formControl.value) {
      const msgError = document.getElementById(msgErrorId);
      console.log(msgErrorId);
      if (msgError) {
        msgError.classList.add('hidden');
      }
    }

    // Validate email
    if (formControlName === 'email' && formControl && formControl.value) {
      if (!formControl.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        const msgError = document.getElementById(msgErrorId);
        if (msgError) {
          msgError.classList.remove('hidden');
        }
      }
    }

    // Validate phone number
    if (formControlName === 'phoneNumber' && formControl && formControl.value) {
      if (!formControl.value.match(/^[0-9]{10}$/)) {
        const msgError = document.getElementById(msgErrorId);
        if (msgError) {
          msgError.classList.remove('hidden');
        }
      }
    }
  }

  onSubmit() {
    // Loop through form controls and validate
    for(let key in this.contactForm.controls) {
      const formControl = this.contactForm.get(key);
      if (formControl && formControl.invalid) {
        document.getElementById(`err-msg-${key}`)?.classList.remove('hidden');
      }
    }
  }

  onSelectHelp(help: any) {
    this.contactForm.patchValue({
      help: help.label,
    });
  }

  toggleDrop() {
    this.onDrop = !this.onDrop;
  }
}
