import { Component, OnInit, ViewChild } from '@angular/core';
import { Vertice } from 'src/app/entities/vertice';
import { Arvore3D } from 'src/app/entities/arvore-3d';
import { CustomCanvasComponent } from '../custom-canvas/custom-canvas.component';
import { Cores } from 'src/app/entities/poligono';

@Component({
    selector: 'rotacao',
    templateUrl: './rotacao.component.html',
    styleUrls: ['./rotacao.component.less']
})
export class RotacaoComponent implements OnInit {

    vertices: Vertice[] = [];
    v0: Vertice;
	fig: Arvore3D;
	@ViewChild('canvas') canvas: CustomCanvasComponent;

	constructor() {
        for (let i = 0; i < 2; i++) this.vertices.push(new Vertice(0, 0));
        this.v0 = new Vertice(0,0);
    }
    
    ngOnInit(): void {

    }


    desenharEixo(){
        let v: number[] = [];
        v[0] = this.vertices[1].x - this.vertices[0].x;
        v[1] = this.vertices[1].y - this.vertices[0].y;
        v[2] = 1;
        this.canvas.context.clearRect(0, 0, 800, 800);
        this.canvas.desenharReta([[100*v[0], 100*v[1], v[2]], [-100*v[0], -100*v[1], v[2]]])
        
        this.fig = new Arvore3D(Cores.transparent);
        this.fig.visao = [1,1,1];
        this.fig.ctx = this.canvas.context;
        this.fig.translateX(this.v0.x)
        this.fig.translateY(this.v0.y)
        this.fig.translateZ(this.v0.z-1)
        this.fig.desenhar();
    }

    rotacionar(){
        let fator = 180;
        let v: number[] = [];
        v[0] = this.vertices[1].x - this.vertices[0].x;
        v[1] = this.vertices[1].y - this.vertices[0].y;
        v[2] = this.vertices[1].z - this.vertices[0].z;
        for (let i = 0; i <= fator; i++) {
			setTimeout( () =>{
                let ang = Math.PI * i / fator;
                let q = [];
                q[0] = Math.cos(ang/2);
                q[1] = [Math.sin(ang/2) * v[0], Math.sin(ang/2) * v[1], Math.sin(ang/2) * v[2]]
            }, 5);
        }
    }
}
