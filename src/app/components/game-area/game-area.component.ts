import { Component, OnInit, Input } from '@angular/core';
import { Cores } from 'src/app/entities/poligono';
import { Quadrado } from 'src/app/entities/quadrado';
import { Figura } from 'src/app/entities/figura';
import { Pentagono } from 'src/app/entities/pentagono';

@Component({
    selector: 'game-area',
    templateUrl: './game-area.component.html',
    styleUrls: ['./game-area.component.less']
})
export class GameAreaComponent implements OnInit {

    @Input() figura: Figura;
    @Input() numero: number;
    @Input() tamanho: number;
    @Input() grid: boolean = false;

    constructor() { }

    ngOnInit() {

    }

    getNome(){
        return "canvas" + this.numero;
    }
}
