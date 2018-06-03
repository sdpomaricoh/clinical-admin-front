import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: []
})
export class AcountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) { }

  ngOnInit() {
    this.loadCheck();
  }

  changeTheme(color: string, link: any){
    this.check(link);
    this._settings.applyTheme(color)
  }

  check(link: any){

    let selectors: any = document.getElementsByClassName('selector');

    for ( let ref of selectors ) {
      ref.classList.remove('working');
    }

    link.classList.add('working')
  }

  loadCheck(){

    let selectors: any = document.getElementsByClassName('selector');
    let theme: string = this._settings.adjustments.theme;

    for ( let ref of selectors ) {
      if (ref.getAttribute('data-theme') == theme){
        ref.classList.add('working');
        break;
      }
    }

  }
}
