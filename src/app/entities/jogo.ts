import { Cores } from './poligono';

export class Jogo{
    private _niveis: Nivel[]

    set niveis(value){
        this._niveis = value.map(x => Object.assign(new Nivel(), x));
    }
    get niveis(){
        return this._niveis;
    }
}

export class Nivel{
    private _figuras : Figura[];
    private _opcoes: Figura[];
    tamanho: number;
    pergunta: string;
    resposta: number;

    set figuras(value){
        this._figuras = value.map(x => Object.assign(new Figura(), x));
    }
    get figuras(){
        return this._figuras;
    }

    set opcoes(value){
        this._opcoes = value.map(x => Object.assign(new Figura(), x));
    }
    get opcoes(){
        return this._opcoes;
    }
}

export class Figura{
    private _poligonos: Poligono[];

    set poligonos(value){
        this._poligonos = value.map(x => Object.assign(new Poligono(), x));
    }
    get poligonos(){
        return this._poligonos;
    }
}

export class Poligono{
    nome: string;
    private _cor: string;
    private _transformacoes: Transformacao[];

    set transformacoes(value){
        this._transformacoes = value.map(x => Object.assign(new Transformacao(), x));
    }
    get transformacoes(){
        return this._transformacoes;
    }

    set cor(value){
        this._cor = Cores[value];
    }
    get cor(): string{
        return this._cor;
    }
}

export class Transformacao{
    nome: string;
    valor: number;
}