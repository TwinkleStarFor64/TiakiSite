import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/common/services/pages.service';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  constructor(public contenu:PagesService) { }

  ngOnInit(): void {
  }

}
