import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/common/services/pages.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor(public contenu:PagesService) { }

  ngOnInit(): void {
  }

}
