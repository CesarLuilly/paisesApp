import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  public termino : any = "Hola Mundo";

  constructor(
    //              //inyeciond e servicio.
    private _paisService : PaisService
    ) 
  {   }
  
  public buscar(){

    this._paisService.buscarPais(this.termino).subscribe(
      resp => {
        console.log(resp);
      }
    );

    console.log(this.termino);
  }
}
