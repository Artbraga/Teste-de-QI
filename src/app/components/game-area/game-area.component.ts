import { Component, OnInit } from '@angular/core';
import { Poligono, Cores } from 'src/app/entities/poligono';
import { Quadrado } from 'src/app/entities/quadrado';
import { Triangulo } from 'src/app/entities/triangulo';
import { Linha } from 'src/app/entities/linha';
import { Estrela } from 'src/app/entities/estrela';

@Component({
    selector: 'game-area',
    templateUrl: './game-area.component.html',
    styleUrls: ['./game-area.component.less']
})
export class GameAreaComponent implements OnInit {

    poligono: Poligono;
    constructor() { }

    ngOnInit() {
        this.poligono = new Estrela(Cores.verde);
        this.poligono.escalaX(2);
    }

}
