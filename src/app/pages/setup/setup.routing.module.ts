import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ShopComponent } from './shop/shop.component';
import { SetupComponent } from './setup.component';

const routes: Routes = [{
    path: '',
    component: SetupComponent,
    children: [
        {
            path: 'shop',
            component: ShopComponent,
        },

    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SetupRoutingModule { }
