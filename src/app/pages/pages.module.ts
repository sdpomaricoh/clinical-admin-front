import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    AcountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    AcountSettingsComponent
  ],
  imports: [
    PAGES_ROUTES,
    SharedModule,
    FormsModule
  ]
})
export class PagesModule { }
