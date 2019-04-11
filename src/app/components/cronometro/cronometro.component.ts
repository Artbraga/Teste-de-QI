import { Component, OnInit} from '@angular/core';

@Component({
    selector:'cronometro',
    templateUrl:'./cronometro.component.html',
    styleUrls: ['./cronometro.component.less']
})

export class CronometroComponent implements OnInit{

    ngOnInit(): void {
        this.start();
    }

    hora:number = 0;
    minutos:number = 0;
    segundos:number = 0;

    contador:any;
    constructor(){
    }

    start(){
        if(this.contador == undefined) {
            this.contador = setInterval(()=> {
                this.segundos += 1;
                if (this.segundos == 60) {
                    this.segundos = 0;
                    this.minutos += 1;
                    if (this.minutos == 60) {
                        this.minutos = 0;
                        this.hora += 1;
                        if (this.hora = 24) {
                            this.hora = 0;
                        }
                    }
                }
            }, 1000);
        }
    }
}