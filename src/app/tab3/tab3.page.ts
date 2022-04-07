import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public darkMode: DarkModeService) {}

  changeTheme(event){
    this.darkMode.setMode(event.detail.value);
  }
}
