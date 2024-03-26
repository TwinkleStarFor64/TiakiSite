import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { CandidaterComponent } from './pages/candidater/candidater.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CandidaterValidComponent } from './pages/candidater-valid/candidater-valid.component';
import { EnqueteComponent } from './pages/enquete/enquete.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, title:"L'application qui aide les aidants"},
  {path:'mentions', component:MentionsComponent, title:'Mentions légales'},
  {path:'enquete', component:EnqueteComponent, title:'Enquête'},
  {path:'testeur', component:CandidaterComponent, title:'Tests'},
  {path:'testeur-valid', component:CandidaterValidComponent, title:'Inscription validée'},
  {path:'partenaires', component:PartenairesComponent, title:'Partenaires'},
  {path:'newsletter', component:NewsletterComponent},
  {path:'nous-contacter', component:ContactComponent},
  {path:'**', component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
