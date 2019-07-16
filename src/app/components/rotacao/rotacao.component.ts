import { Component, OnInit, ViewChild } from '@angular/core';
import { Vertice } from 'src/app/entities/vertice';
import { Arvore3D } from 'src/app/entities/arvore-3d';
import { CustomCanvasComponent } from '../custom-canvas/custom-canvas.component';

@Component({
    selector: 'rotacao',
    templateUrl: './rotacao.component.html',
    styleUrls: ['./rotacao.component.less']
})
export class RotacaoComponent implements OnInit {

    vertices: Vertice[] = [];
	fig: Arvore3D;
	@ViewChild('canvas') canvas: CustomCanvasComponent;

	constructor() {
		for (let i = 0; i < 2; i++) this.vertices.push(new Vertice(0, 0));
    }
    
    ngOnInit(): void {

    }


    desenharEixo(){
        let v: number[];
        v[0] = this.vertices[1].x - this.vertices[0].x;
        v[1] = this.vertices[1].x - this.vertices[0].x;
        v[2] = this.vertices[1].x - this.vertices[0].x;
    }
}
