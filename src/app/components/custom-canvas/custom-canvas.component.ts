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
    @Input() tamanho2: number;
    @Input() possuiPoligono: boolean = true;

    context: CanvasRenderingContext2D;
    constructor() { 
        
    }

    ngAfterViewInit() {
        let canvas = <HTMLCanvasElement> document.getElementById(this.idCanvas);
        this.context = canvas.getContext("2d");
        canvas.height = this.tamanho;
        canvas.width  = this.tamanho2 == null ? this.tamanho : this.tamanho2;
        let ctx = canvas.getContext("2d");
        if(this.grid) this.desenharGrid();
        if(this.possuiPoligono){
            this.figura.poligonos.forEach(p =>{
                p.ctx = ctx;
                p.desenhar();
            });
        }
        if (this.figura3d != null){
            this.figura3d.ctx = ctx;
            this.figura3d.ctx.strokeStyle = "black";
            this.figura3d.desenhar();
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
        this.context.moveTo(v[0][0]/(1+(v[0][2]/200)), v[0][1]/(1+(v[0][2]/200)));
        this.context.lineTo(v[1][0]/(1+(v[1][2]/200)), v[1][1]/(1+(v[1][2]/200)));
        this.context.strokeStyle = "black";
        this.context.stroke();
    }

    public desenharPonto(v: number[]){
        this.context.fillStyle = 'red';
        this.context.fillRect(v[0]/v[2]-2, v[1]/v[2]-2, 5, 5);
    }
}
