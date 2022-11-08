import { BrowserModule, BrowserTransferStateModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ng-inline-svg
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

// config
import { environment } from '../environments/environment';

// services
import { SeoService } from './_services/seo.service';

// routing
import { AppRoutingModule } from './app-routing.module';

// un-routet components
import { AppComponent } from './app.component';
import { HeaderComponent } from './_functional/header/header.component';
import { FooterComponent } from './_functional/footer/footer.component';

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

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        KontaktComponent,
        LoesungenComponent,
        ItServiceManagementComponent,
        DatenschutzUndItSicherheitComponent,
        TeamComponent,
        FallstudienComponent,
        ImpressumComponent,
        DatenschutzerklaerungComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'sg-app' }),
        AppRoutingModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        BrowserTransferStateModule,
        InlineSVGModule.forRoot({ baseUrl: environment.baseUrl })
    ],
    providers: [
        Title,
        SeoService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
