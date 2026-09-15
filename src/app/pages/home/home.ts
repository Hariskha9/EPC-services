import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Faq {
  q: string;
  a: string;
}

interface PricingTier {
  size: string;
  price: string;
  beds: string | null;
  featured?: boolean;
}

interface ServiceCard {
  icon: string;
  title: string;
  text: string;
}

interface TargetAudience {
  who: string;
  desc: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface EpcRatingRow {
  grade: string;
  range: string;
  color: string;
  w: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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

  readonly faqs: Faq[] = [
    { q: 'What is an EPC?', a: 'An Energy Performance Certificate (EPC) provides information about the energy efficiency of a property and includes an energy efficiency rating and recommendations for potential improvements.' },
    { q: 'Do I need an EPC when selling my property?', a: 'An EPC may be required when selling a residential property. Requirements and exemptions can vary, so contact us if you\'re unsure.' },
    { q: 'Do landlords need an EPC?', a: 'Landlords may need an EPC when letting a residential property, subject to applicable requirements and exemptions.' },
    { q: 'How much does a residential EPC cost in London?', a: 'Our residential EPC prices start from £89.99, depending on the size of the property.' },
    { q: 'What areas do you cover?', a: 'We cover all London boroughs, the City of London and properties under/within the M25.' },
    { q: 'Are you Elmhurst accredited?', a: 'Yes. EPC London UK is Elmhurst accredited.' },
    { q: 'Can I book an EPC through WhatsApp?', a: 'Yes. Call or WhatsApp us on +44 7498 043736.' },
    { q: 'What are your opening hours?', a: 'Monday–Saturday: 9:00 AM–6:00 PM. Sunday: Closed.' },
  ];

  readonly pricing: PricingTier[] = [
    { size: 'Studio', price: '£89.99', beds: null },
    { size: '1–3 Bedrooms', price: '£109.99', beds: '1-3', featured: true },
    { size: '4 Bedrooms', price: '£129.99', beds: '4' },
    { size: '5 Bedrooms', price: '£149.99', beds: '5' },
    { size: '6 Bedrooms', price: '£169.99', beds: '6' },
  ];

  readonly whyCards: ServiceCard[] = [
    { icon: '🏆', title: 'Elmhurst Accredited', text: 'We are accredited through Elmhurst, providing confidence that your EPC is carried out through an established accreditation scheme.' },
    { icon: '🗺️', title: 'London-Wide Coverage', text: 'We cover residential properties across all London boroughs, the City of London and under/within the M25.' },
    { icon: '🏠', title: 'Residential Specialists', text: 'Our service is focused specifically on residential EPCs — nothing else. No confusion, no upselling.' },
    { icon: '💷', title: 'Clear Pricing', text: 'Residential EPC prices start from £89.99, based on property size. All inclusive — no hidden costs.' },
    { icon: '📱', title: 'Simple Booking', text: 'Book online, call us or contact us through WhatsApp. We make it as easy as possible.' },
    { icon: '⭐', title: 'Professional Service', text: 'A reliable, professional and straightforward EPC service from booking through to completion.' },
  ];

  readonly whoWeHelp: TargetAudience[] = [
    { who: 'Homeowners', desc: 'Selling your home and need an EPC? We make it simple.' },
    { who: 'Landlords', desc: 'Need an EPC for your rental property? Book with us today.' },
    { who: 'Property Managers', desc: 'Managing multiple residential properties across London?' },
    { who: 'Estate Agents', desc: 'Need reliable EPC support for residential properties?' },
    { who: 'Letting Agents', desc: 'Need EPCs for properties being marketed for rent?' },
    { who: 'Property Professionals', desc: 'Need a professional EPC service across all of London?' },
  ];

  readonly processSteps: ProcessStep[] = [
    { step: '01', title: 'Book Your EPC', desc: 'Choose your property size and request your EPC online, by phone or via WhatsApp.' },
    { step: '02', title: 'Property Visit', desc: 'An accredited domestic energy assessor attends the property to carry out the assessment.' },
    { step: '03', title: 'EPC Assessment', desc: 'The property is assessed using the information and features required for the EPC.' },
    { step: '04', title: 'EPC Certificate', desc: 'Your EPC is lodged and issued through the appropriate process following completion.' },
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

  readonly trustBadges: string[] = [
    '✓ Elmhurst Accredited',
    '✓ All London Boroughs',
    '✓ Under M25',
    '✓ From £89.99',
    '✓ No Hidden Costs',
  ];

  readonly epcRequirements: string[] = [
    'Selling a property',
    'Renting or letting a property',
    'Marketing a property for sale or rent',
    'Meeting energy efficiency requirements',
  ];

  toggleFaq(index: number): void {
    this.openFaq.update((current) => (current === index ? null : index));
  }
}
