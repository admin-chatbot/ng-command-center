import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, debounceTime, fromEvent, takeUntil } from "rxjs";

export interface Menu {
  headTitle1?: string;
  level?: number;
  headTitle2?: string;
  path?: string;
  title?: string;
  type?: string;
  icon?: string;
  active?: boolean;
  bookmark?: boolean;
  pinnedData?: boolean;
  items?: Menu[];
  children?: Menu[];
  access?:string[];
}

@Injectable({
  providedIn: "root",
})

export class NavService {
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  private unsubscriber: Subject<any> = new Subject();

  public language: boolean = false;

  public collapseSidebar: boolean = window.innerWidth < 1200 ? true : false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(0), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 1200) {
          this.collapseSidebar = true;
        } else {
          this.collapseSidebar = false;
        }
      });
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }



  MENUITEMS_SUPER_ADMIN: Menu[] = [
     
    {
      headTitle1: "General",
    },
    {
      level: 1, title: "Dashboards",icon: "home", path: "main/dashboard" ,type: "link" , access:['SUPER_ADMIN','CLIENT_ADMIN','USER']     
    } ,
    {
      level: 1,
      title: "Company",
      icon: "project",
      type: "sub",
      active: false,
      children: [
        { path: "main/company/list", title: "Company List", type: "link" },
        { path: "main/company/create", title: "Company New", type: "link" },
      ],
      access:['SUPER_ADMIN'] 
    },
    {
      level: 1,
      title: "Application",
      icon: "project",
      type: "sub",
      active: false,
      children: [
        { path: "main/project/list", title: "Project List", type: "link" },
        { path: "main/project/create", title: "Create New", type: "link" },
      ],
      access:['SUPER_ADMIN','CLIENT_ADMIN'] 
    },
    {
      level: 1,
      title: "Service",
      icon: "project",
      type: "sub",
      active: false,
      children: [
        { path: "main/service/list", title: "Service List", type: "link" },
        { path: "main/service/create", title: "Service New", type: "link" },
      ],
      access:['SUPER_ADMIN','CLIENT_ADMIN','USER'] 
    }  ,
    {
      level: 1,
      title: "Flow",
      icon: "project",
      type: "sub",
      active: false,
      children: [
        { path: "main/flow/list", title: "Flow List", type: "link" },
        { path: "main/flow/create", title: "Flow New", type: "link" },
      ],
    } ,
    {
      level: 1, title: "Database",icon: "ecommerce", path: "main/db" ,type: "link"  ,active:false      
    },
    {
      level: 1, title: "Document",icon: "ecommerce", path: "main/document" ,type: "link"  ,active:false      
    }, 
    {
      level: 1,
      title: "User",
      icon: "user",
      type: "sub",
      active: false,
      children: [
        { path: "main/user/list", title: "User List", type: "link"   },
        { path: "main/user/create", title: "User New", type: "link"   },
      ],
      access:['SUPER_ADMIN','CLIENT_ADMIN'] 
    },
    {
      headTitle1: "CHATS",
    },
    {
      level: 1, title: "Chat With API",icon: "ecommerce", path: "main/chat/api" ,type: "link"  ,active:false      
    }, 
    {
      level: 1, title: "Chat With Document",icon: "ecommerce", path: "main/chat/document" ,type: "link"  ,active:false      
    },     
    {
      level: 1, title: "Chat With DB",icon: "ecommerce", path: "/chat/SQL" ,type: "link"    ,active:false     
    }  ,
    {headTitle1: "SUPPORT"},
    { level: 1,path: "main/faq",title: "FAQ",icon: "faq",type: "link", active: false},
    
    {
      level: 1,
      path: "main/knowledgebase",
      title: "Knowledgebase",
      icon: "knowledgebase",
      type: "link",
      active: false,
    },
    {
      level: 1,
      path: "main/support-ticket",
      title: "Support Ticket",
      icon: "support-tickets",
      type: "link",
      active: false,
    },
    {headTitle1: ""},
    { level: 1,path: "main/billing",title: "Billing",icon: "support-tickets",type: "link", active: false},
    

  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS_SUPER_ADMIN);

  ngOnDestroy() {
    this.unsubscriber.complete();
  }
}
