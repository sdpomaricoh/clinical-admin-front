import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component'
import { RegisterComponent } from './login/register.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent }
]

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: false })
