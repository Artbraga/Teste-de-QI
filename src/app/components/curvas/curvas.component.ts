import { Component, OnInit, ViewChild } from '@angular/core';
import { Vertice } from '../../entities/vertice';
import { Triangulo } from 'src/app/entities/triangulo';
import { Cores, Poligono } from 'src/app/entities/poligono';
import { CustomCanvasComponent } from '../custom-canvas/custom-canvas.component';

@Component({
	selector: 'curvas',
	templateUrl: './curvas.component.html',
	styleUrls: ['./curvas.component.less']
})
export class CurvasComponent implements OnInit {

	vertices: Vertice[] = [];
	fig: Poligono;
	@ViewChild('canvas') canvas: CustomCanvasComponent;

	constructor() {
		for (let i = 0; i < 4; i++) this.vertices.push(new Vertice(0, 0));
	}

	ngOnInit() {
	}

	desenharCurva() {
		let size = 200;
		this.canvas.context.clearRect(0, 0, 800, 800);
		let p1 = [this.vertices[0].x, this.vertices[0].y];
		let arrayX = this.vertices.map(k => k.x);
		let arrayY = this.vertices.map(k => k.y);
		for (let i = 0; i < size; i++) {
			let p2 = [this.bezier(arrayX, i/size), this.bezier(arrayY, i/size)];
			this.canvas.desenharReta([p1, p2]);
			p1 = p2;
		}
	}

	desenhar(){
		let size = 500;
		this.fig = new Triangulo(Cores.transparent);
		this.fig.escalaX(1);
		this.fig.escalaY(1);
		this.fig.ctx = this.canvas.context;
		let arrayX = this.vertices.map(k => k.x);
		let arrayY = this.vertices.map(k => k.y);
		let p1 = [this.vertices[0].x, this.vertices[0].y];
		this.fig.translateY(p1[1]-100);
		this.fig.translateX(p1[0]);
		for (let i = 0; i < size; i++) {
			setTimeout( () =>{
				this.canvas.context.clearRect(0, 0, 800, 800);
				this.desenharCurva();
				let p2 = [this.bezier(arrayX, i/size), this.bezier(arrayY, i/size)];
				this.fig.translateX(p2[0]-p1[0]);
				this.fig.translateY(p2[1]-p1[1]);
				this.fig.desenhar();
				p1 = p2;
			}, 5);
		}
	}

	delay(ms: number) {
		return new Promise( resolve => setTimeout(resolve, ms) );
	}

	bezier(nums: number[], t: number): number{
		let n = Math.pow(1-t, 3)*nums[0];
		n += 3*t*Math.pow(1-t, 2)*nums[1];
		n += 3*Math.pow(t, 2)*(1-t)*nums[2];
		n += Math.pow(t, 3)*nums[3];
		return n;
	}

	multiplicarMartiz(a: number[][], b: number[][]) {
		var aNumRows = a.length, aNumCols = a[0].length,
			bNumRows = b.length, bNumCols = b[0].length,
			m = new Array(aNumRows);  // initialize array of rows
		for (var r = 0; r < aNumRows; ++r) {
			m[r] = new Array(bNumCols); // initialize the current row
			for (var c = 0; c < bNumCols; ++c) {
				m[r][c] = 0;             // initialize the current cell
				for (var i = 0; i < aNumCols; ++i) {
					m[r][c] += a[r][i] * b[i][c];
				}
			}
		}
		return m;
	}
}
