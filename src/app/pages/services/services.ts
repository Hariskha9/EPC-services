import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface PricingTier {
  size: string;
  price: string;
  featured?: boolean;
}

interface Faq {
  q: string;
  a: string;
}

interface ValueProp {
  label: string;
  desc: string;
}

interface EpcRatingRow {
  grade: string;
  range: string;
  color: string;
  w: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  openFaq = signal<number | null>(null);

  readonly londonBoroughs: string[] = [
    'Barking & Dagenham', 'Barnet', 'Bexley', 'Brent', 'Bromley', 'Camden',
    'Croydon', 'Ealing', 'Enfield', 'Greenwich', 'Hackney', 'Hammersmith & Fulham',
    'Haringey', 'Harrow', 'Havering', 'Hillingdon', 'Hounslow', 'Islington',
    'Kensington & Chelsea', 'Kingston upon Thames', 'Lambeth', 'Lewisham',
    'Merton', 'Newham', 'Redbridge', 'Richmond upon Thames', 'Southwark',
    'Sutton', 'Tower Hamlets', 'Waltham Forest', 'Wandsworth', 'Westminster',
    'City of London',
  ];

  readonly pricing: PricingTier[] = [
    { size: 'Studio', price: '£89.99' },
    { size: '1–3 Bedrooms', price: '£109.99', featured: true },
    { size: '4 Bedrooms', price: '£129.99' },
    { size: '5 Bedrooms', price: '£149.99' },
    { size: '6 Bedrooms', price: '£169.99' },
  ];

  readonly faqs: Faq[] = [
    { q: 'What is a residential EPC?', a: 'A residential Energy Performance Certificate (EPC) provides information about the energy efficiency of a property, including an energy rating and recommendations for improvements.' },
    { q: 'How much does a residential EPC cost in London?', a: 'Our residential EPC prices start from £89.99 for a studio, through to £169.99 for a 6-bedroom property. All prices are inclusive — no hidden costs.' },
    { q: 'What areas do you cover?', a: 'We cover all London boroughs, the City of London and properties under/within the M25.' },
    { q: 'Are you Elmhurst accredited?', a: 'Yes. EPC London UK is accredited through Elmhurst.' },
    { q: 'Can I book as a landlord or estate agent?', a: 'Yes. We work with homeowners, landlords, estate agents, letting agents and property professionals across London.' },
  ];

  readonly valueProps: ValueProp[] = [
    { label: 'Professional', desc: 'London-focused EPC service' },
    { label: 'Local', desc: 'All boroughs + M25' },
    { label: 'Transparent', desc: 'Property-size pricing' },
    { label: 'Easy', desc: 'Simple online booking' },
    { label: 'Accessible', desc: 'Call or WhatsApp' },
    { label: 'Accredited', desc: 'Elmhurst accredited' },
  ];

  readonly epcFeatures: string[] = [
    'Energy efficiency rating (A–G scale)',
    'Environmental impact rating',
    'Estimated energy costs',
    'Potential energy improvement recommendations',
    'Estimated cost savings from improvements',
  ];

  readonly epcRatings: EpcRatingRow[] = [
    { grade: 'A', range: '92+', color: '#1a7a3c', w: '100%' },
    { grade: 'B', range: '81–91', color: '#2d9e4e', w: '90%' },
    { grade: 'C', range: '69–80', color: '#6abf6a', w: '78%' },
    { grade: 'D', range: '55–68', color: '#f5c842', w: '66%' },
    { grade: 'E', range: '39–54', color: '#f5a623', w: '54%' },
    { grade: 'F', range: '21–38', color: '#e67e22', w: '42%' },
    { grade: 'G', range: '1–20', color: '#e74c3c', w: '30%' },
  ];

  toggleFaq(index: number): void {
    this.openFaq.update((current) => (current === index ? null : index));
  }
}
