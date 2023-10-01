import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/common/services/pages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public contenu:PagesService) { }

  ngOnInit(): void {
    this.contenu.pages.length > 0 ? this.contenu.getPage('contact') : this.contenu.id = 'contact';
  }

}
