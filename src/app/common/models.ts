export interface MenusI {
  main: Array<LienI>;
  external: Array<LienI>;
  social: Array<LienI>;
  foot: Array<LienI>;
  partners: Array<LienI>;
}
export class Menus implements MenusI {
  main = [];
  external = [];
  social = [];
  foot = [];
  partners = [];
}
export interface LienI {
  title: string;
  description?: string;
  url: string;
  image?: string;
  alt?: string;
  target?: string;
  type?: string;
  public?: boolean;
}
export interface PageI {
  id: string;
  header: HeaderI;
  link?: LienI;
  article?: string;
  list?: Array<listContentI>;
}
export class Page implements PageI {
  id = '';
  header = {
    title: '',
    subtitle: '',
    block: '',
    image: {
      url: '',
      alt: ''
    }
  };
  link = {
    title: '',
    url: ''
  };
  article = '';
  list = [];
}
export interface HeaderI {
  title: string;
  subtitle: string;
  block: string;
  image?: MediaI;
}
export interface listContentI {
  title: string;
  image?: MediaI;
  link?:LienI;
  p: Array<string>;
}
export interface MediaI {
  url: string;
  alt: string;
}
export interface PartenaireI {
  title:string;
  description:string;
  url:string;
  image:string;
  alt:string;
  type?:string;
  public?:boolean;
  ordre:number
}
