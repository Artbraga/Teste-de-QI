import { Component, OnInit } from '@angular/core';

import json from 'src/app/data/jogo.json';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(){
        console.log(json);
    }

    iniciar(){
        console.log("click");
    }
}
