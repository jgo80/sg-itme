import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routet components
import { HomeComponent } from './_static/home/home.component';
import { KontaktComponent } from './_static/kontakt/kontakt.component';
import { LoesungenComponent } from './_static/loesungen/loesungen.component';
import { ItServiceManagementComponent } from './_static/loesungen/it-service-management/it-service-management.component';
import { DatenschutzUndItSicherheitComponent } from './_static/loesungen/it-und-datenschutz-nach-eu-dsgvo/it-und-datenschutz-nach-eu-dsgvo.component';
import { TeamComponent } from './_static/team/team.component';
import { FallstudienComponent } from './_functional/fallstudien/fallstudien.component';
import { ImpressumComponent } from './_static/impressum/impressum.component';
import { DatenschutzerklaerungComponent } from './_static/datenschutzerklaerung/datenschutzerklaerung.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'loesungen', component: LoesungenComponent
    },
    {
        path: 'loesungen/it-service-management', component: ItServiceManagementComponent
    },
    {
        path: 'loesungen/it-und-datenschutz-nach-eu-dsgvo', component: DatenschutzUndItSicherheitComponent
    },
    {
        path: 'team', component: TeamComponent
    },
    {
        path: 'fallstudien', component: FallstudienComponent
    },
    {
        path: 'fallstudien/:category', component: FallstudienComponent
    },
    {
        path: 'kontakt', component: KontaktComponent
    },
    {
        path: 'impressum', component: ImpressumComponent
    },
    {
        path: 'datenschutzerklaerung', component: DatenschutzerklaerungComponent
    },

    // otherwise redirect to home
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
