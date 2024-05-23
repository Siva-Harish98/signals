import { Routes } from '@angular/router';
import { MainpageComponent } from './layout/mainpage/mainpage.component';

export const routes: Routes = [
    {
        path: "",
        component:MainpageComponent,
        children: [
            {path: "analytics_object",loadComponent: ()=> import('./layout/analytics-object/analytics-object.component')},
            {path: "metrics",loadComponent: ()=> import('./layout/metrics/metrics.component')},
            {path:"**",redirectTo:'analytics_object',pathMatch:'full'}
        ]
        
    }
];
