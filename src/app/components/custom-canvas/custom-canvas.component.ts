import { Component, OnInit, Input } from '@angular/core';
import { Figura } from 'src/app/entities/figura';

@Component({
    selector: 'custom-canvas',
    templateUrl: './custom-canvas.component.html',
    styleUrls: ['./custom-canvas.component.less']
})
export class CustomCanvasComponent implements OnInit {

    @Input() idCanvas: string;
    @Input() figura: Figura;
    @Input() grid: boolean;
    constructor() { }

    ngOnInit() {
        let c = <HTMLCanvasElement> document.getElementById(this.idCanvas);
        c.width  = 100;
        c.height = 120;
        let ctx = c.getContext("2d");
        if(this.grid) this.desenharGrid();
        this.figura.poligonos.forEach(p =>{
            p.ctx = ctx;
            p.desenhar();
        });
    }

    desenharGrid(){
        var bw = 300;
        // Box height
        var bh = 150;
        // Padding
        var p = 0;

        var canvas = <HTMLCanvasElement> document.getElementById(this.idCanvas);
        var context = canvas.getContext("2d");
        for (var x = 0; x <= bw; x += 20) {
            context.moveTo(x + p, p);
            context.lineTo(x + p, bh + p);
        }

        for (var x = 0; x <= bh; x += 20) {
            context.moveTo(p, x + p);
            context.lineTo(bw + p, x + p);
        }
        context.strokeStyle = "black";
        context.stroke();
    }

}
