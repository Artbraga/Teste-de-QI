import { Poligono, Cores } from './poligono';
import { Vertice } from './vertice';
import { Aresta } from './aresta';

export class Arvore3D extends Poligono{
    
    faces: Face[];
    visao: number[];
    constructor(cor: string){
        super(cor, 21);
        this.arestas = [];
        this.faces = [];
        let v1 = new Vertice(0, 0.7);
        let v2 = new Vertice(0.5, 0);
        let v3 = new Vertice(1, 0.7);
        let v4 = new Vertice(0.7, 0.6);
        let v5 = new Vertice(1, 1);
        let v6 = new Vertice(0, 1);
        let v7 = new Vertice(0.3, 0.6); 
        this.arestas = [new Aresta(v1,v2), new Aresta(v2,v3), new Aresta(v3,v4), new Aresta(v4, v5), new Aresta(v5, v6),  new Aresta(v6, v7),  new Aresta(v7, v1)];
        this.faces = [new Face(this.arestas, Cores.cinza)];

        let v8 = new Vertice(0, 0.7, 50);
        let v9 = new Vertice(0.5, 0, 50);
        let v10 = new Vertice(1, 0.7, 50);
        let v11 = new Vertice(0.7, 0.6, 50);
        let v12 = new Vertice(1, 1, 50);
        let v13 = new Vertice(0, 1, 50);
        let v14 = new Vertice(0.3, 0.6, 50); 
        let a2 = [new Aresta(v8,v9), new Aresta(v14, v8), new Aresta(v13, v14), new Aresta(v12, v13), new Aresta(v11, v12), new Aresta(v10,v11), new Aresta(v9,v10)];
        //let a2 = [new Aresta(v8,v9), new Aresta(v9,v10), new Aresta(v10,v11), new Aresta(v11, v12), new Aresta(v12, v13),  new Aresta(v13, v14),  new Aresta(v14, v8)];
        this.arestas = this.arestas.concat(a2);
        this.faces.push(new Face(a2, Cores.cinzaEscuro));

        this.arestas = this.arestas.concat(new Aresta(v1,v8), new Aresta(v2,v9), new Aresta(v3,v10), new Aresta(v4,v11), new Aresta(v5,v12), new Aresta(v6,v13), new Aresta(v7,v14));

        this.faces.push(new Face([new Aresta(v1, v8), new Aresta(v8, v9), new Aresta(v9, v2), new Aresta(v2, v1)], Cores.cinzaClaro));
        this.faces.push(new Face([new Aresta(v3, v2), new Aresta(v2, v9), new Aresta(v9, v10), new Aresta(v10, v3)], Cores.cinzaClaro));
        this.faces.push(new Face([new Aresta(v3, v4), new Aresta(v4, v11), new Aresta(v11, v10), new Aresta(v10, v3)], Cores.cinzaEscuro));
        this.faces.push(new Face([new Aresta(v7, v1), new Aresta(v1, v8), new Aresta(v8, v14), new Aresta(v14, v7)], Cores.cinzaEscuro));
        this.faces.push(new Face([new Aresta(v7, v6), new Aresta(v6, v13), new Aresta(v13, v14), new Aresta(v14, v7)], Cores.cinzaEscuro));
        this.faces.push(new Face([new Aresta(v5, v4), new Aresta(v4, v11), new Aresta(v11, v12), new Aresta(v12, v5)], Cores.cinzaEscuro));
        this.faces.push(new Face([new Aresta(v5, v6), new Aresta(v6, v13), new Aresta(v13, v12), new Aresta(v12, v5)], Cores.cinzaEscuro));
    }

    public desenhar(): void{
        for(let i = 0; i < this.faces.length; i++){
            let f = this.faces[this.faces.length-1-i]
            //if(f.estaVisivel(this.visao))
                f.desenharFace(this.ctx, this.visao);
        }
    };

    public translateX(x: number){
        this.faces[0].translateX(x);
        this.faces[1].translateX(x);
    }

    public translateY(x: number){
        this.faces[0].translateY(x);
        this.faces[1].translateY(x);
    }

    public translateZ(x: number){
        this.faces[0].translateZ(x);
        this.faces[1].translateZ(x);
    }
}

class Face extends Poligono{
    arestas: Aresta[];

    constructor(arestas: Aresta[], cor:string){
        super(cor, arestas.length);
        this.arestas = arestas;
    }

    public estaVisivel(visao: number[]):boolean{
        let normal = [];
        let u = this.arestas[0];
        let v = this.arestas[1];
        let vetU = [u.v2.x - u.v1.x, u.v2.y - u.v1.y, u.v2.z - u.v1.z];
        let vetV = [v.v2.x - v.v1.x, v.v2.y - v.v1.y, v.v2.z - v.v1.z];
        
        normal[0] = vetU[1] * vetV[2] - vetU[2] * vetV[1];
        normal[1] = vetU[0] * vetV[2] - vetU[2] * vetV[0];
        normal[2] = vetU[0] * vetV[1] - vetU[1] * vetV[0];
        console.log(visao, normal);
        console.log((visao[0] * normal[0] + visao[1] * normal[1] + visao[2] * normal[2]));
        //return true;
        return (visao[0] * normal[0] + visao[1] * normal[1] + visao[2] * normal[2]) > 0;
    }

    public desenharFace(ctx: CanvasRenderingContext2D, visao: number[]): void{
        this.ctx = ctx;
        if(this.cor != Cores.cinza){

            if(this.arestas[0].v1.x < visao[0]){
                this.cor = Cores.cinzaClaro
            }
            else{
                this.cor = Cores.cinzaEscuro;
            }
        }
        if(this.ctx == null){
            console.log("Contexto indefinido");
            return;
        }
        this.ctx.fillStyle = this.cor;
        this.ctx.beginPath();
        for(let i = 0; i < this.lados; i++){
            let v1 = this.arestas[i].v1;
            let v2 = this.arestas[i].v2;
            //this.ctx.moveTo((v1.x - visao[0])/(1+(v1.z/200)) + visao[0], (v1.y - visao[1])/(1+(v1.z/200)) + visao[1] );
            this.ctx.lineTo((v2.x - visao[0])/(1+(v2.z/200)) + visao[0], (v2.y - visao[1])/(1+(v2.z/200)) + visao[1] );
        }
        this.ctx.closePath();
        this.ctx.fill();
    }
}

// class Aresta{
//     v1: Vertice;
//     v2: Vertice;

//     constructor(v1: Vertice, v2: Vertice){
//         this.v1 = v1;
//         this.v2 = v2;
//     }
// }

// class Vertice{
//     x: number;
//     y: number;
//     z: number;

//     private escala: number = 50;
//     constructor(x: number, y: number, z: number){
//         this.x = x*this.escala;
//         this.y = y*this.escala;
//         this.z = z*this.escala;
//     }
// }