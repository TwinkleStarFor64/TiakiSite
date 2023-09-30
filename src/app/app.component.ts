import { Component } from '@angular/core';
import { PagesService } from './common/services/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tiaki, le numérique pour aider les aidants';

  constructor(public pages:PagesService){
  }


}
