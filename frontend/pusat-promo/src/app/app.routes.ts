import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'health', pathMatch: 'full' },
	{ path: 'health', loadComponent: () => import('./pages/health/health.component').then(m => m.HealthComponent) }
];
