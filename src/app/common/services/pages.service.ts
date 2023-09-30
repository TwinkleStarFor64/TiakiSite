import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menus, MenusI, PageI } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  menus:MenusI = new Menus();
  pages:Array<PageI> = [];
  /**
   * Service to get data from pages and menus
   * @param http HttpClient instance to load data
   */
  constructor(private http:HttpClient) {
    this.getMenus();
  }
  /** Get list of menus */
  getMenus(){
    this.http.get<MenusI>('assets/data/menus.json').subscribe({
      next: (m) => {
        this.menus = m;
      },
      error: (e) => console.log(e),
      complete: () => this.getPages()
    });
  }
  /** Get list of content in pages */
  getPages(){
    this.http.get<Array<PageI>>('assets/data/pages.json').subscribe({
      next: (p) => this.pages = p,
      error: (e) => console.log(e),
      complete: () => console.log(this.pages)
    });
  }
  /**
   * Get a page by his id
   * @param id Id of the page to get
   * @returns PageI object
   */
  getPage(id:string):PageI{
    const p:PageI = this.pages.find(p => p.id === id)!;
    return p;
  }
}
