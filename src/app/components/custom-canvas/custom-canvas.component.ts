import { Component, OnInit, Input } from '@angular/core';
import { Poligono } from 'src/app/entities/poligono';

@Component({
    selector: 'custom-canvas',
    templateUrl: './custom-canvas.component.html',
    styleUrls: ['./custom-canvas.component.less']
})
export class CustomCanvasComponent implements OnInit {

    @Input() idCanvas: string;
    @Input() poligono: Poligono;
    constructor() { }

    ngOnInit() {
        let c = <HTMLCanvasElement> document.getElementById(this.idCanvas);
        let ctx = c.getContext("2d");
        this.poligono.ctx = ctx;
        this.poligono.desenhar();
    }

}
