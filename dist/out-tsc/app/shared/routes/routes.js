export const content = [
    {
        path: 'main',
        loadChildren: () => import('../../components/main/main-routing.module').then(m => m.MainRoutingModule),
        data: {
            title: "",
            breadcrumb: "",
        }
    },
];
//# sourceMappingURL=routes.js.map