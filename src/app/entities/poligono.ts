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
            console.log(v1.x +","+ v1.y +"=>"+ v2.x  +","+ v2.y);
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
            console.log(a.v1.x, a.v1.y);
            let x = a.v1.x* Math.cos(angulo) - a.v1.y* Math.sin(angulo);
            let y = a.v1.x* Math.sin(angulo) + a.v1.y* Math.cos(angulo);
            a.v1.x = x;
            a.v1.y = y;
            console.log(a.v1.x, a.v1.y);
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
    amarelo = "#FF0",
    verde = "#0FF",
    preto = "#000"
}