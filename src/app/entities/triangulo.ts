import { Poligono } from './poligono';
import { Aresta } from './aresta';
import { Vertice } from './vertice';

export class Triangulo extends Poligono {

    constructor(cor: string){
        super(cor, 3);
        let v1 = new Vertice(0.5,0);
        let v2 = new Vertice(1,1);
        let v3 = new Vertice(0,1);
        this.arestas = [new Aresta(v1,v2), new Aresta(v2,v3), new Aresta(v3, v1)];
    }

}