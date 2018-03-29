import {NgModule, OnInit} from '@angular/core';

import { ChildComponent } from './child/child.component';

@NgModule({
    imports: [],
    declarations: [
        ChildComponent
    ],
    providers: [],
    exports: [
        ChildComponent
    ]
})

export class ParentModule {}
