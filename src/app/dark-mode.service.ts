import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  currentMode = 'light';
  private store: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  setMode(mode: string){
    if (mode === 'auto'){
      this.autoListner();
      this.checkSystem();
    } else {
      document.body.setAttribute('data-theme',mode);
      this.currentMode = mode;
    }
    this.store?.set('theme',mode);
  }

  async checkMode(){
    let theme = await this.store?.get('theme');
    if (!theme){
      theme = 'auto';
    }
    this.setMode(theme);
  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.store = storage;
  }

  autoListner(){
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    systemDark.addListener(async (systemInitiatedDark)=>{
      const theme = await this.store?.get('theme');
      if (theme === 'auto'){
        if (systemInitiatedDark.matches){
          document.body.setAttribute('data-theme','dark');
        } else {
          document.body.setAttribute('data-theme','light');
        }
      }
    });
  }

  checkSystem(){
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (systemDark.matches){
      document.body.setAttribute('data-theme','dark');
    } else {
      document.body.setAttribute('data-theme','light');
    }
  }
}
