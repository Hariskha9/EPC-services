import { Routes } from '@angular/router';
import { Body } from './layout/body/body';

export const routes: Routes = [
        {
    path:'', component: Body, children:[
        {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
    title: 'Asbestos Survey London | Asbestos Surveys from £239.99',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services').then((m) => m.Services),
    title: 'Asbestos Survey London | Asbestos Surveying & Sampling Services',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact Asbestos London Services | Book an Asbestos Survey London',
  },
  { path: '**', redirectTo: '' },
    ]
    }
];
