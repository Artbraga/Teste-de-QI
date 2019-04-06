export class Vertice{
    x: number;
    y: number;

    private escala: number = 50;
    constructor(x: number, y: number){
        this.x = x*this.escala;
        this.y = y*this.escala;
    }
}