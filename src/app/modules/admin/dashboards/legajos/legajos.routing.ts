import { Route } from '@angular/router';
import { LegajosComponent } from 'app/modules/admin/dashboards/legajos/legajos.component';
import { ProjectResolver } from 'app/modules/admin/dashboards/project/project.resolvers';

export const projectRoutes: Route[] = [
    {
        path     : '',
        component: LegajosComponent,
        resolve  : {
            data: ProjectResolver
        }
    }
];
