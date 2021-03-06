import { Aresta } from './aresta';

export abstract class Poligono{
    protected arestas: Aresta[];
    cor: string;
    ctx: CanvasRenderingContext2D;
    lados: number;

    constructor(cor: string, lados: number){
        this.cor = cor;
        this.lados = lados;
    }

    public desenhar(): void{
        if(this.ctx == null){
            console.log("Contexto indefinido");
            return;
        }
        this.ctx.fillStyle = this.cor;
        this.ctx.beginPath();
        let v1 = this.arestas[0].v1;
        this.ctx.moveTo(v1.x, v1.y );
        for(let i = 0; i < this.lados-1; i++){
            let v1 = this.arestas[i].v1;
            let v2 = this.arestas[i].v2;
            this.ctx.lineTo(v2.x, v2.y);
        }
        this.ctx.closePath();
        this.ctx.fill();
    };

    public translateX(x: number){
        this.arestas.forEach(a => {
            a.v1.x += x;
        });
    }

    public translateY(x: number){
        this.arestas.forEach(a => {
            a.v1.y += x;
        });
    }

    public translateZ(x: number){
        this.arestas.forEach(a => {
            a.v1.z += x;
        });
    }

    public escalaX(mult: number){
        this.arestas.forEach(a => {
            a.v2.x *= mult;
        });
    }

    public escalaY(mult: number){
        this.arestas.forEach(a => {
            a.v2.y *= mult;
        });
    }

    public rotate(angulo: number){
        angulo = angulo*Math.PI/180;
        this.arestas.forEach(a =>{
            let x = a.v1.x* Math.cos(angulo) - a.v1.y* Math.sin(angulo);
            let y = a.v1.x* Math.sin(angulo) + a.v1.y* Math.cos(angulo);
            a.v1.x = x;
            a.v1.y = y;
        });
    }

    public reflexaoX(){
        this.arestas.forEach(a =>{
            a.v1.y *= -1;
        });
    }

    public reflexaoY(){
        this.arestas.forEach(a =>{
            a.v1.x *= -1;
        });
    }
}

export enum Cores{
    vermelho = "#F00",
    azul= "#00F",
    amarelo = "#FFD700",
    verde = "#008000",
    preto = "rgba(0, 0, 0, 1)",
    rosa = "#8B008B",
    marrom = "#8B4513",
    transparent = "rgba(0, 0, 0, 0)",
    cinza = "rgb(50,250,150)",
    cinzaEscuro = "rgb(4, 150, 75)",
    cinzaClaro = "rgba(80, 250, 165)"

}