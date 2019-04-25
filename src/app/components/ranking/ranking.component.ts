import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.less']
})
export class RankingComponent implements OnInit {

    @Output() voltar = new EventEmitter<any>();
    @Input() numero: number;
    constructor() { }

    ngOnInit() {
    }
}
