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
    numeroDoNivel: number = 0;

    respostas: number[] = [];

    constructor() { }

    ngOnInit(){
        this.jogo = Object.assign(new Jogo(), (<any>json).default);
    }

    iniciar(){
        this.nivelSelecionado = this.jogo.niveis[this.numeroDoNivel];
        this.selecionado = "jogo";
    }

    proximoNivel(resp: number){
        this.respostas.push(resp);
        this.numeroDoNivel++;
        if(this.numeroDoNivel < this.jogo.niveis.length){
            this.nivelSelecionado = this.jogo.niveis[this.numeroDoNivel];
        }
        else{
            this.selecionado = "fim";
        }
    }
}
