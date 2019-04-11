import { Poligono } from './poligono';
import { Vertice } from './vertice';
import { Aresta } from './aresta';

export class Trapezio extends Poligono{

    constructor(cor: string){
        super(cor, 4);
        let v1 = new Vertice(0.3,0);
        let v2 = new Vertice(0.7,0);
        let v3 = new Vertice(1,0.5);
        let v4 = new Vertice(0,0.5);
        this.arestas = [new Aresta(v1,v2), new Aresta(v2,v3), new Aresta(v3,v4), new Aresta(v4, v1)];
    }

}