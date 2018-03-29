import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'parent-component',
    template: `
        <div class="jumbotron" (click)="activate()">
            <h1>Je suis un composant Parent.</h1>
            <child-component></child-component>
        </div>
        `
})

export class ParentComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('Init !');
    }

    activate() {
        console.log('Clicked !');
    }
}
