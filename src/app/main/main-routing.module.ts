import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            redirectTo: 'landing',
        },
        {
            path: 'landing',
            loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingModule),
        },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule { }
