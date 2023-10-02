import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/common/services/pages.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public contenu:PagesService) { }

  ngOnInit(): void {
  }

}
