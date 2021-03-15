import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        //          //Configuracion de la ruta principal.
        path: '',
        component:PorPaisComponent,
        pathMatch : 'full'
    },
    {
        path: 'region',
        component:PorRegionComponent
    },
    {
        path: 'capital',
        component:PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component:VerPaisComponent
    },
    {
        //          //Cualquier otro path que no sea la anteriores,
        //          //  entonces debe ir a la ruta principal.
        path: '**',
        redirectTo: ''
    }
]; 

@NgModule({
    imports:[
        //          //Es el que va a hacer la configuracion de mis
        //          //  rutas.
        RouterModule.forRoot(routes)
    ],
    exports : [
        //          //Una ves configurado hay que exportarlo para poder
        //          // utilizarlo.
        RouterModule
    ]
})
export class AppRoutingModule{

}








