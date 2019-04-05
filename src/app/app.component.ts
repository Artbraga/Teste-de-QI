import { Component, OnInit } from '@angular/core';
import { Poligono } from './entities/poligono';
import { Vertice } from './entities/vertice';
import { Aresta } from './entities/aresta';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'trab-cg';

    ngOnInit(): void {
    }

}
