import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./countries/countries').then((m) => m.Countries),
    pathMatch: 'full',
  },
];
