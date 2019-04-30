import { Poligono } from './poligono';
import { Vertice } from './vertice';
import { Aresta } from './aresta';

export class Arvore extends Poligono{
    constructor(cor: string){
        super(cor, 7);
        let v1 = new Vertice(0, 0.7);
        let v2 = new Vertice(0.5, 0);
        let v3 = new Vertice(1, 0.7);
        let v4 = new Vertice(0.7, 0.6);
        let v5 = new Vertice(1, 1);
        let v6 = new Vertice(0, 1);
        let v7 = new Vertice(0.3, 0.6); 
        this.arestas = [new Aresta(v1,v2), new Aresta(v2,v3), new Aresta(v3,v4), new Aresta(v4, v5), new Aresta(v5, v6),  new Aresta(v6, v7),  new Aresta(v7, v1)];
    }
}