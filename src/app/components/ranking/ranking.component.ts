import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ranking } from '../home/home.component';

@Component({
    selector: 'ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.less']
})
export class RankingComponent implements OnInit {

    @Output() voltar = new EventEmitter<any>();
    @Input() numero: number;
    @Input() ranking: Ranking[];
    
    constructor() { }

    ngOnInit() {
        console.log(this.ranking);
    }
}
