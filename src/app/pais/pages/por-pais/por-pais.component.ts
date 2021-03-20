import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { ICountry } from '../../Interfaces/ICountry';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  public termino : any = "Hola Mundo";
  public hayError : boolean = false;
  public paises : ICountry[] = [];

  constructor(
    //              //inyeciond e servicio.
    private _paisService : PaisService
    ) 
  {   }
  
  public buscar(){

    this.hayError = false;

    this._paisService.buscarPais(this.termino).subscribe(
      (paises : ICountry[]) => {
        console.log(paises);
        this.paises = [...paises];
      }, 
      (err) => {
        this.hayError = true;
        console.log('Error');
        console.log(err);
        //          //Limpio los paises.
        this.paises = [];
      }
    );

    console.log(this.termino);
  }
}
