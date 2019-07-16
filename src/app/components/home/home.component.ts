import { Component, OnInit, ViewChild } from '@angular/core';

import * as json from 'src/app/data/jogo.json';
import { Jogo, Nivel } from 'src/app/entities/jogo';
import { NivelComponent } from '../nivel/nivel.component';
import { Arvore3D } from 'src/app/entities/arvore-3d';
import { Cores } from 'src/app/entities/poligono';

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
    @ViewChild("nivel") nivelComponent: NivelComponent;
    arvore3d: Arvore3D;

    respostas: number[] = [];
    ranking: Ranking[];

    constructor() { }

    ngOnInit(){
        this.jogo = Object.assign(new Jogo(), (<any>json).default);
        let x = JSON.parse(localStorage.getItem("ranking"));
        this.ranking = x == null ? [] : x.map(x => Object.assign(new Ranking(), x));

        this.arvore3d = new Arvore3D(Cores.transparent);
        this.arvore3d.visao = [500, 300, 1];
        this.arvore3d.translateX(100);
        this.arvore3d.translateY(100);
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
            this.nivelComponent.carrega(this.nivelSelecionado);
        }
        else{
            let nome = prompt("Por favor, entre com o seu nome");
            let r = new Ranking(nome, this.getRespostasCorretas());
            this.ranking.push(r);
            this.ranking.sort((n1,n2) => n2.acertos - n1.acertos);
            this.ranking.slice(0, 10);

            localStorage.setItem("ranking", JSON.stringify(this.ranking));
            this.selecionado = "fim";
        }
    }

    goHome(){
        this.selecionado = "home";
        this.numeroDoNivel = 0;
        this.respostas = [];
    }

    getRespostasCorretas(){
        let resp = 0;
        this.jogo.niveis.forEach((n, i) =>{
            if(n.resposta == this.respostas[i]) resp ++;
        });
        return resp;
    }
}

export class Ranking{
    nome: string;
    acertos: number;

    constructor(nome: string = null, a: number = null){
        this.nome = nome;
        this.acertos = a;
    }
}