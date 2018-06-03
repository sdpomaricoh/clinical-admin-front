import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  adjustments: Adjustments = {
    url: 'assets/css/colors/default-dark.css',
    theme: 'default-dark'
  }
  constructor(@Inject(DOCUMENT) private _document,) {
    this.loadSettings()
  }

  saveSettings(){
    localStorage.setItem('settings', JSON.stringify(this.adjustments))
  }

  loadSettings(){
    if(localStorage.getItem('settings')) {
      this.adjustments = JSON.parse(localStorage.getItem('settings'))
      this.applyTheme(this.adjustments.theme);
    }
  }
  applyTheme(theme: string){
    this.adjustments.url = `assets/css/colors/${theme}.css`
    this.adjustments.theme = theme;

    this._document.getElementById('themes').setAttribute('href',  this.adjustments.url)

    this.saveSettings()
  }

}

interface Adjustments {
  url: string,
  theme: string
}
