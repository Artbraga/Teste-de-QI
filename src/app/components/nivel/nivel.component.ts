import { Component, OnInit, Input } from '@angular/core';
import { Nivel, Transformacao } from 'src/app/entities/jogo';
import { Figura } from 'src/app/entities/figura';
import { Linha } from 'src/app/entities/linha';
import { Poligono } from 'src/app/entities/poligono';
import { Quadrado } from 'src/app/entities/quadrado';
import { Triangulo } from 'src/app/entities/triangulo';
import { Pentagono } from 'src/app/entities/pentagono';
import { Estrela } from 'src/app/entities/estrela';
import { Trapezio } from 'src/app/entities/trapezio';
import { Hexagono } from 'src/app/entities/hexagono';

@Component({
    selector: 'nivel',
    templateUrl: './nivel.component.html',
    styleUrls: ['./nivel.component.less']
})
export class NivelComponent implements OnInit {
    @Input() nivel: Nivel;
    @Input() numero: number;
    figuras: Figura[] = [];

    constructor() { }

    ngOnInit() {
        this.nivel.figuras.forEach(f =>{
            let fig = new Figura();
            f.poligonos.forEach(p =>{
                let pol: Poligono;
                switch(p.nome){
                    case "linha":
                        pol = new Linha(p.cor);
                        break;
                    case "triangulo":
                        pol = new Triangulo(p.cor);
                        break;
                    case "quadrado":
                        pol = new Quadrado(p.cor);
                        break;
                    case "pentagono":
                        pol = new Pentagono(p.cor);
                        break;
                    case "estrela":
                        pol = new Estrela(p.cor);
                        break;
                    case "trapezio":
                        pol = new Trapezio(p.cor);
                        break;
                    case "hexagono":
                        pol = new Hexagono(p.cor);
                        break;
                }
                pol = this.transformacoes(pol, p.transformacoes)
                fig.poligonos.push(pol);
            });
            this.figuras.push(fig);
        });
    }

    transformacoes(pol: Poligono, transformacoes: Transformacao[]): Poligono{
        transformacoes.forEach(t =>{
            switch(t.nome){
                case "translateX":
                    pol.translateX(t.valor);
                    break;
                case "translateY":
                    pol.translateY(t.valor);
                    break;
                case "escalaX":
                    pol.escalaX(t.valor);
                    break;
                case "escalaY":
                    pol.escalaY(t.valor);
                    break;
                case "escalaY":
                    pol.translateX(t.valor);
                    break;
                case "rotate":
                    pol.rotate(t.valor);
                    break;
                case "reflexaoX":
                    pol.reflexaoX();
                    break;
                case "reflexaoY":
                    pol.reflexaoY();
                    break;
            }
        });
        return pol;
    }

    getClass(){
        switch(this.nivel.figuras.length){
            case 1:
                return "col-12";
            case 4:
                return "col-3";
        }
    }
}
