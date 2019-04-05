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
            a.v2.x += x;
        });
    }

    public translateY(x: number){
        this.arestas.forEach(a => {
            a.v1.y += x;
            a.v2.y += x;
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
}

export enum Cores{
    vermelho = "#F00",
    azul= "#00F",
    amarelo = "#FF0",
    verde = "#0FF",
    preto = "#000"
}