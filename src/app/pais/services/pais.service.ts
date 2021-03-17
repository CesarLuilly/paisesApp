import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    
    return this._http.get( url );
  }
}
