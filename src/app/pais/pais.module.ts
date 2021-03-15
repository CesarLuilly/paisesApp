import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';



@NgModule({
  declarations: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent],
  imports: [
    CommonModule
  ],
  exports:[
    //              //Se van a utilizar de forma global al exportarlo.
    PorCapitalComponent, 
    PorPaisComponent, 
    PorRegionComponent, 
    VerPaisComponent
  ]
})
export class PaisModule { }
