import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nordwebb';


  date: string = new Date().toISOString();



  constructor (private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.use(navigator.language);  // use the browser's language
  }



}
