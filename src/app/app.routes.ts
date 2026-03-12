import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'components-basics',
    loadComponent: () => import('./components-basics/components-basics.page').then(m => m.ComponentsBasicsPage)
  },
  {
    path: 'input-validation',
    loadComponent: () => import('./input-validation/input-validation.page').then(m => m.InputValidationPage)
  },
  {
    path: 'routing-demo',
    loadComponent: () => import('./routing-demo/routing-demo.page').then(m => m.RoutingDemoPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage)
  },
  {
    path: 'task-management',
    loadComponent: () => import('./task-management/task-management.page').then(m => m.TaskManagementPage)
  },
  {
    path: 'user',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
];
