import { Component, OnInit } from '@angular/core';
import { Poligono, Cores } from 'src/app/entities/poligono';
import { Quadrado } from 'src/app/entities/quadrado';
import { Triangulo } from 'src/app/entities/triangulo';
import { Linha } from 'src/app/entities/linha';
import { Estrela } from 'src/app/entities/estrela';
import { Figura } from 'src/app/entities/figura';

@Component({
    selector: 'game-area',
    templateUrl: './game-area.component.html',
    styleUrls: ['./game-area.component.less']
})
export class GameAreaComponent implements OnInit {

    figura: Figura;
    constructor() { }

    ngOnInit() {
        let pol1 = new Quadrado(Cores.verde);
        let pol2 = new Estrela(Cores.azul);
        pol1.escalaX(2);
        this.figura = new Figura();
        this.figura.poligonos = [pol1, pol2];
    }

}
