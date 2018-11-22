import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appVotePadding]'
})
export class VotePaddingDirective implements OnInit {
    @Input('appVotePadding') appVotePadding: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    changePadding(padding: string) {
        this.renderer.setStyle(this.element.nativeElement, 'padding', padding);
    }

    ngOnInit() {
        this.changePadding(this.appVotePadding);
    }

}
