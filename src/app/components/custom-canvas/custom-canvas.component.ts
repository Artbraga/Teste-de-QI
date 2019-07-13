import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Figura } from 'src/app/entities/figura';
import { Arvore3D } from 'src/app/entities/arvore-3d';

@Component({
    selector: 'custom-canvas',
    templateUrl: './custom-canvas.component.html',
    styleUrls: ['./custom-canvas.component.less']
})
export class CustomCanvasComponent implements AfterViewInit {

    @Input() idCanvas: string;
    @Input() figura: Figura;
    @Input() figura3d: Arvore3D;
    @Input() grid: boolean;
    @Input() tamanho: number;
    constructor() { }

    ngAfterViewInit() {
        let c = <HTMLCanvasElement> document.getElementById(this.idCanvas);
        c.width  = this.tamanho;
        c.height = this.tamanho;
        let ctx = c.getContext("2d");
        if(this.grid) this.desenharGrid();
        if(this.figura != null)
            this.figura.poligonos.forEach(p =>{
                p.ctx = ctx;
                p.desenhar();
            });
        if (this.figura3d != null){
            this.figura3d.ctx = ctx;
            this.figura3d.ctx.strokeStyle = "black";
            this.figura3d.desenhar();
        }
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
