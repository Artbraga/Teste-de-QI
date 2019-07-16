export class Vertice{
    x: number;
    y: number;
    z: number;

    private escala: number = 100;
    constructor(x: number, y: number, z: number = 1){
        this.x = x*this.escala;
        this.y = y*this.escala;
        this.z = z;
    }

    public projetarX(): number{
        return this.x/(1+(this.z/200))
    }

    public projetarY(): number {
        return this.y/(1+(this.z/200))
    }
}