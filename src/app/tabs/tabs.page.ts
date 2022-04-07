import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public darkMode: DarkModeService) {}


  ionViewWillEnter(){
    this.darkMode.checkMode();
  }
}
