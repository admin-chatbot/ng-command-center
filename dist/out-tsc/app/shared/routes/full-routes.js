export const fullRoutes = [
    {
        path: 'authentication',
        loadChildren: () => import('../../authentication/authentication.module').then(m => m.AuthenticationModule)
    },
];
//# sourceMappingURL=full-routes.js.map