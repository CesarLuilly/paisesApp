import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl : string = 'https://restcountries.eu/rest/v2'; 

  //------------------------------------------------------------------------------------------
  constructor(
    private _http : HttpClient
    ) 
  { 
    
  }

  //------------------------------------------------------------------------------------------
  public buscarPais(

    termino : string 
    ) :  Observable<any>
  {
    const url = `${ this._apiUrl }/name/${ termino }`;
    
    // //              //OTRA MANERA DE TRATAR UN ERROR.
    // return this._http.get( url )
    //   .pipe(
    //     //          //Funcion para lanzar un error.
    //     //          //Lo cual retorna un observable y convertimos ese 
    //     //          //  observable en un nuevo observable a traves de 
    //     //          //  "of([])"
    //     //          //En otra palabras aqui atrapa el error y devuelve un
    //     //          //  arreglo vacio.
    //     catchError(err => of([]))   
    //   );

    return this._http.get( url );
  }
}
