import { Component, OnInit } from '@angular/core';
import { SeoService } from './_services/seo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        public seoService: SeoService,
    ) { }

    ngOnInit() {
        this.seoService.setupAnalytics();
    }

}
