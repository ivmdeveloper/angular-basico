import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Superman', 'Hulk'];
  erasedHeroe: string = '';

  deleteHeroe(): void{
    console.log('Borrando');
    this.erasedHeroe  =  this.heroes.shift() || '';
    console.log(this.erasedHeroe);
  }
}
