import { Component, OnInit, Input } from '@angular/core';
import { Figura } from 'src/app/entities/figura';

@Component({
    selector: 'game-area',
    templateUrl: './game-area.component.html',
    styleUrls: ['./game-area.component.less']
})
export class GameAreaComponent implements OnInit {

    @Input() figura: Figura;
    @Input() numero: number;
    @Input() tamanho: number;

    constructor() { }

    ngOnInit() {

    }

    getNome(){
        return "canvas" + this.numero;
    }
}
