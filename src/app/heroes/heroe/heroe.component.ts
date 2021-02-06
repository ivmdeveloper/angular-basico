import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeCompoent{
    nombre: string = 'Ironman';
    edad  : number = 45;

    get nameCapitalize(): string {
        return this.nombre.toLocaleUpperCase();
    }
    getName(): string {
        return `${ this.nombre } - ${this.edad }`;
    }
    changeName():void {
        this.nombre = 'Spiderman';
    }
    changeEdad(): void {
        this.edad = 30;
    }
}