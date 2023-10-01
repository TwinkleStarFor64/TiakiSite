import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnteteComponent } from './structure/entete/entete.component';
import { PiedComponent } from './structure/pied/pied.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { CandidaterComponent } from './pages/candidater/candidater.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedComponent,
    AccueilComponent,
    MentionsComponent,
    CandidaterComponent,
    PartenairesComponent,
    NewsletterComponent,
    ErreurComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
