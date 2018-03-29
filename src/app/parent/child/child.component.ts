import { Component } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<h2 (click)="clicked()">{{ phrase }}</h2>`
})

export class ChildComponent {
    phrase: string = 'Je suis le composant enfant.';

    constructor() {}

    clicked() {
        this.phrase = 'Je suis activé ! Merci de votre clic.';
    }
}
