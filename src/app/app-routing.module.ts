import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { CandidaterComponent } from './pages/candidater/candidater.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { ErreurComponent } from './pages/erreur/erreur.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, outlet:'pages'},
  {path:'mentions', component:MentionsComponent, outlet:'pages'},
  {path:'testeur', component:CandidaterComponent},
  {path:'partenaires', component:PartenairesComponent},
  {path:'newsletter', component:NewsletterComponent},
  {path:'**', component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
