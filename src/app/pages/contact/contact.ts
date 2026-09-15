import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  postcode: string;
  propertyType: string;
  bedrooms: string;
  preferredDate: string;
  preferredTime: string;
  parking: string;
  congestion: string;
  message: string;
  consent: boolean;
}

const INITIAL: FormData = {
  fullName: '',
  phone: '',
  email: '',
  address: '',
  postcode: '',
  propertyType: '',
  bedrooms: '',
  preferredDate: '',
  preferredTime: '',
  parking: '',
  congestion: '',
  message: '',
  consent: false,
};

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
form: FormData = { ...INITIAL };
  submitted = false;

  propertySizes = [
    { label: 'Studio', price: '£89.99' },
    { label: '1–3 Bedrooms', price: '£109.99' },
    { label: '4 Bedrooms', price: '£129.99' },
    { label: '5 Bedrooms', price: '£149.99' },
    { label: '6 Bedrooms', price: '£169.99' },
  ];

  chargeOptions = ['Yes', 'No', 'Not Sure'];

  inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#17A34C]/40 focus:border-[#17A34C] text-sm text-gray-800 transition-all bg-white placeholder-gray-400';
  selectClass = `${this.inputClass} appearance-none`;
  labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5';

  setField<K extends keyof FormData>(key: K, value: FormData[K]): void {
    this.form[key] = value;
  }

  handleSubmit(): void {
    this.submitted = true;
  }

  resetForm(): void {
    this.submitted = false;
    this.form = { ...INITIAL };
  }


}
