import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component'
import { NotfoundComponent } from '../shared/notfound/notfound.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: '' , redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(ROUTES)
