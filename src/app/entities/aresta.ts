import { Vertice } from './vertice';

export class Aresta{
    v1: Vertice;
    v2: Vertice;

    constructor(v1: Vertice, v2: Vertice){
        this.v1 = v1;
        this.v2 = v2;
    }
}