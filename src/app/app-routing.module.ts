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

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'mentions', component:MentionsComponent},
  {path:'testeur', component:CandidaterComponent},
  {path:'testeur-valid', component:CandidaterValidComponent},
  {path:'partenaires', component:PartenairesComponent},
  {path:'newsletter', component:NewsletterComponent},
  {path:'nous-contacter', component:ContactComponent},
  {path:'**', component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
