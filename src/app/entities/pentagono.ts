import { Poligono } from './poligono';
import { Vertice } from './vertice';
import { Aresta } from './aresta';

export class Pentagono extends Poligono{

    constructor(cor: string){
        super(cor, 5);
        let v1 = new Vertice(0.5,0);
        let v2 = new Vertice(1,0.4);
        let v3 = new Vertice(0.81,1);
        let v4 = new Vertice(0.18,1);
        let v5 = new Vertice(0,0.4);
        this.arestas = [new Aresta(v1,v2), new Aresta(v2,v3), new Aresta(v3,v4), new Aresta(v4, v5), new Aresta(v5, v1)];
    }

}