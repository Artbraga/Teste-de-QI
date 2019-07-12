import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Figura } from 'src/app/entities/figura';
import { Vertice } from 'src/app/entities/vertice';

@Component({
    selector: 'custom-canvas',
    templateUrl: './custom-canvas.component.html',
    styleUrls: ['./custom-canvas.component.less']
})
export class CustomCanvasComponent implements AfterViewInit {

    @Input() idCanvas: string;
    @Input() figura: Figura;
    @Input() grid: boolean;
    @Input() tamanho: number;
    @Input() possuiPoligono: boolean = true;
    constructor() { }

    public get context(){
        var canvas = <HTMLCanvasElement> document.getElementById(this.idCanvas);
        var context = canvas.getContext("2d");
		return context
    }
    
    ngAfterViewInit() {
        let c = <HTMLCanvasElement> document.getElementById(this.idCanvas);
        c.width  = this.tamanho;
        c.height = this.tamanho;
        let ctx = c.getContext("2d");
        if(this.grid) this.desenharGrid();
        if(this.possuiPoligono){
            this.figura.poligonos.forEach(p =>{
                p.ctx = ctx;
                p.desenhar();
            });
        }
    }

    public desenharGrid(){
        var bw = this.tamanho;
        // Box height
        var bh = this.tamanho;
        // Padding
        var p = 0;

        for (var x = 0; x <= bw; x += 20) {
            this.context.moveTo(x + p, p);
            this.context.lineTo(x + p, bh + p);
        }

        for (var x = 0; x <= bh; x += 20) {
            this.context.moveTo(p, x + p);
            this.context.lineTo(bw + p, x + p);
        }
        this.context.strokeStyle = "black";
        this.context.stroke();
    }

    public desenharReta(v: number[][]){
        var canvas = <HTMLCanvasElement> document.getElementById(this.idCanvas);
        var context = canvas.getContext("2d");

        context.moveTo(v[0][0], v[0][1]);
        context.lineTo(v[1][0], v[1][1]);
        context.strokeStyle = "black";
        context.stroke();
    }
}
