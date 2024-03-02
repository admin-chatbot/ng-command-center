import { Routes } from "@angular/router"; 

export const content: Routes = [    
    {
        path: 'main',
        loadChildren: () => import('../../components/main/main-routing.module').then(m => m.MainRoutingModule),
        data: {
            title: "",
            breadcrumb: "",
        }
    },
]


