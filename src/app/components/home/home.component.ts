import { Component, OnInit } from '@angular/core';

import * as json from 'src/app/data/jogo.json';
import { Jogo, Nivel } from 'src/app/entities/jogo';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    selecionado: string = "home";
    nivelSelecionado: Nivel = null;
    jogo: Jogo;

    constructor() { }

    ngOnInit(){
        this.jogo = Object.assign(new Jogo(), json.default);
        console.log(this.jogo);
    }

    iniciar(){
        this.selecionado = "jogo";
        this.nivelSelecionado = this.jogo.niveis[0]
    }
}
