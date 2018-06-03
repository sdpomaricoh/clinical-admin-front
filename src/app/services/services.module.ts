import { NgModule } from '@angular/core';
import { SettingsService, SharedService, SidebarService } from './services.index';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],
  declarations: []
})
export class ServicesModule { }

