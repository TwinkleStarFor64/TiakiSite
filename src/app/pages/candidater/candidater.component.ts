import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PagesService } from 'src/app/common/services/pages.service';

@Component({
  selector: 'app-candidater',
  templateUrl: './candidater.component.html',
  styleUrls: ['./candidater.component.css']
})
export class CandidaterComponent implements OnInit {

  candidature = {
    nom:'',
    email:'',
    adresse:'',
    codePostal:'',
    ville:'',
    tel:'',
    nutrition:'',
    kine:'',
    opto:'',
    tests:false,
    com:false,
  }

  constructor(public contenu:PagesService) { }

  ngOnInit(): void {
    this.contenu.pages.length > 0 ? this.contenu.getPage('candidater') : this.contenu.id = 'candidater';
  }
  /**
   * Formulaire d'inscription
   * @param f Données du formmulaire
   */
  go(f:NgForm){
    console.log(f);
  }
}
