import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menus, MenusI, Page, PageI } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  menus:MenusI = new Menus();
  pages:Array<PageI> = [];
  id:string = 'accueil'; // Id de la page à afficher
  page:PageI = new Page(); // Contenu de la page en cours
  page$:BehaviorSubject<PageI> = new BehaviorSubject<PageI>(new Page()); // Contenu de la page en cours
  /**
   * Service to get data from pages and menus
   * @param http HttpClient instance to load data
   */
  constructor(private http:HttpClient) {
    this.getPages();
  }
  /** Get list of menus */
  getMenus(){
    this.http.get<MenusI>('assets/data/menus.json').subscribe({
      next: (m) => {
        this.menus = m;
      },
      error: (e) => console.log(e),
      complete: () => this.getPage('tiaki')
    });
  }
  /** Get list of content in pages */
  getPages(){
    this.http.get<Array<PageI>>('assets/data/pages.json').subscribe({
      next: (p) => this.pages = p,
      error: (e) => console.log(e),
      complete: () => this.getMenus()
    });
  }
  /**
   * Get a page by his id
   * @param id Id of the page to get
   * @returns PageI object
   */
  getPage(id?:string){
    if(id) this.id = id;
    console.log(this.pages);
    const p:PageI = this.pages.find(p => p.id === this.id)!;
    console.log(p);
    if(p) {
      this.page = p;
      this.page$.next(p);
    };
    // return p;
  }
}
