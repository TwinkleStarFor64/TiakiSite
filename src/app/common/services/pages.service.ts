import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menus, MenusI, Page, PageI, PartenaireI } from '../models';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { Firestore, collectionData, collection, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  router: Router = inject(Router);

  menus: MenusI = new Menus();
  pages: Array<PageI> = [];
  partenaires: Array<PartenaireI> = [];

  id: string = 'tiaki'; // Id de la page à afficher
  page: PageI = new Page(); // Contenu de la page en cours
  // page$: BehaviorSubject<PageI> = new BehaviorSubject<PageI>(new Page()); // Contenu de la page en cours

  pages$!: Observable<Array<PageI>>;
  firestore: Firestore = inject(Firestore);
  /**
   * Service to get data from pages and menus
   * @param http HttpClient instance to load data
   */
  constructor(private http: HttpClient) {
    // this.getPages();
    this.getFirePages();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      console.log(event.url, event.url.length);
      event.url.length > 1 ? this.id = event.url.substring(1, event.url.length) : this.id = 'tiaki';
      console.log(this.id);
      this.getPage();
    });
  }
  /** Get list of menus */
  getMenus() {
    console.log("Menus chargés");
    this.http.get<MenusI>('assets/data/menus.json').subscribe({
      next: (m) => {
        this.menus = m;
        console.log(m);
        this.getFirePartners();
      },
      error: (e) => console.log(e),
      complete: () => this.getPage('tiaki')
    });
  }
  /** Get data from firebase */
  getFirePages() {
    const itemCollection = collection(this.firestore, 'pages');
    collectionData(itemCollection).subscribe({
      next: (p) => {
        this.pages = p as Array<PageI>;
        this.getMenus();
        console.log("Fire pages", p);
      },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    });
  }
  /** Get data from firebase */
  getFirePartners() {
    collectionData(collection(this.firestore, 'partenaires')).subscribe({
      next: (p) => {
        this.partenaires = (p as Array<PartenaireI>).sort((a, b) => a.ordre - b.ordre);
        console.log("Fire pages", p);
      },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    });
  }
  /**
   * Get a page by his id
   * @param id Id of the page to get
   * @returns PageI object
   */
  getPage(id?: string) {
    const p: PageI = this.pages.find(p => p.id === this.id)!;
    console.log(p, id);
    if (p) {
      this.page = p;
    };
  }
  /** Send date to database from test form */
  setBetaForm(testeur: any) {
    setDoc(doc(this.firestore, "beta-testeurs", testeur.email), testeur)
      .then(data => {
        this.router.navigateByUrl('/testeur-valid');
        console.log(data)
      })
      .catch(er => console.log(er));
  }
}
