import { Poligono } from './poligono';
import { Aresta } from './aresta';
import { Vertice } from './vertice';

export class Quadrado extends Poligono{

    constructor(cor: string){
        super(cor, 4);
        let v1 = new Vertice(0,0);
        let v2 = new Vertice(1,0);
        let v3 = new Vertice(0,1);
        let v4 = new Vertice(1,1);
        this.arestas = [new Aresta(v1,v2), new Aresta(v2,v4), new Aresta(v4,v3), new Aresta(v3, v1)];
    }

}