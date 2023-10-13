import { Component } from '@angular/core';
import { PagesService } from 'src/app/common/services/pages.service';

@Component({
  selector: 'app-candidater-valid',
  templateUrl: './candidater-valid.component.html',
  styleUrls: ['./candidater-valid.component.css']
})
export class CandidaterValidComponent {
  constructor(public contenu:PagesService){}
}
