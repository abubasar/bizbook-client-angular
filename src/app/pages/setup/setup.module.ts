import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';



import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup.routing.module';
import { ShopComponent } from './shop/shop.component';

const COMPONENTS = [

    SetupComponent,
    ShopComponent
];

const ENTRY_COMPONENTS = [

];

@NgModule({
    imports: [
        ThemeModule,
        SetupRoutingModule,

    ],
    declarations: [
        ...COMPONENTS,
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS,
    ],
})
export class SetupModule { }
