import { Poligono } from './poligono';
import { Vertice } from './vertice';
import { Aresta } from './aresta';

export class Hexagono extends Poligono{

    constructor(cor: string){
        super(cor, 6);
        let v1 = new Vertice(0.25,0.93);
        let v2 = new Vertice(0.75,0.93);
        let v3 = new Vertice(1,0.5);
        let v4 = new Vertice(0.75,0.07);
        let v5 = new Vertice(0.25,0.07);
        let v6 = new Vertice(0,0.5);
        this.arestas = [new Aresta(v1,v2), new Aresta(v2,v3), new Aresta(v3,v4), new Aresta(v4, v5), new Aresta(v5, v6), new Aresta(v6, v1)];
    }

}