import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective implements OnInit {
    @Input('appHighlightBorder') appHighlightBorder: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    changeColor(border: string) {
        this.renderer.setStyle(this.element.nativeElement, 'border', border);
    }

    ngOnInit() {
        this.changeColor(this.appHighlightBorder);
    }
}
