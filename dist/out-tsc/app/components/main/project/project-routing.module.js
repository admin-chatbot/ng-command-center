import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateNewComponent } from './create-new/create-new.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: ProjectListComponent,
                data: {
                    title: 'Project List',
                    breadcrumb: 'List',
                }
            },
            {
                path: 'create',
                component: CreateNewComponent,
                data: {
                    title: 'Create New Project',
                    breadcrumb: 'Create',
                }
            },
        ],
    }
];
let ProjectRoutingModule = class ProjectRoutingModule {
};
ProjectRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ProjectRoutingModule);
export { ProjectRoutingModule };
//# sourceMappingURL=project-routing.module.js.map