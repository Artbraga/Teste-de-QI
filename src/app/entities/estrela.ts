import { Poligono } from './poligono';

import { Vertice } from './vertice';

import { Aresta } from './aresta';

export class Estrela extends Poligono{
    constructor(cor: string){
        super(cor, 5);
        let v1 = new Vertice(0.5,0);
        let v2 = new Vertice(0,0.39);
        let v3 = new Vertice(1,0.39);
        let v4 = new Vertice(0.19,1);
        let v5 = new Vertice(0.81,1);
        this.arestas = [new Aresta(v1,v5), new Aresta(v5,v2), new Aresta(v2,v3), new Aresta(v3, v4), new Aresta(v4, v1)];
    }


}