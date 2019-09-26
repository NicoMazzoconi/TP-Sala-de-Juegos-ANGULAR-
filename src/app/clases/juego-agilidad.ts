import { getRandomString } from "selenium-webdriver/safari";

export class JuegoAgilidad {
    primerNumero: number;
    operador: string;
    segundoNumero: number;
    numeroIngresado: number;
    resultado: number;
    gano: boolean;

    constructor(){
        this.primerNumero = Math.floor((Math.random() * 10) + 1);
        this.segundoNumero = Math.floor((Math.random() * 10) + 1);
        switch(Math.floor((Math.random() * 4) + 1))
        {
            case 1:
                this.operador = '+';
                this.resultado = this.primerNumero + this.segundoNumero;
            break;

            case 2:
                this.operador = '-';
                this.resultado = this.primerNumero - this.segundoNumero;
            break;

            case 3:
                this.operador = '*';
                this.resultado = this.primerNumero * this.segundoNumero;
            break;

            case 4:
                this.operador = '/';
                if(this.segundoNumero == 0)
                {
                    this.segundoNumero++;
                }
                this.resultado = this.primerNumero / this.segundoNumero;
            break;
        }
    }
}
