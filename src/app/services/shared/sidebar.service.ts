import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge'
    }
  ]

  constructor() { }

}
