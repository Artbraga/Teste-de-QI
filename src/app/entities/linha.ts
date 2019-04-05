import { Poligono } from './poligono';
import { Vertice } from './vertice';
import { Aresta } from './aresta';

export class Linha extends Poligono{

    constructor(cor: string){
        super(cor, 2);
        let v1 = new Vertice(0.5,0);
        let v2 = new Vertice(0.5,1);
        this.arestas = [new Aresta(v1,v2), new Aresta(v2,v1)];
    }

    desenhar(): void{
        if(this.ctx == null){
            console.log("Contexto indefinido");
            return;
        }
        this.ctx.strokeStyle = this.cor;
        this.ctx.beginPath();
        let v1 = this.arestas[0].v1;
        this.ctx.moveTo(v1.x, v1.y);
        let v2 = this.arestas[0].v2;
        this.ctx.lineTo(v2.x, v2.y);
        this.ctx.stroke();
    }
}