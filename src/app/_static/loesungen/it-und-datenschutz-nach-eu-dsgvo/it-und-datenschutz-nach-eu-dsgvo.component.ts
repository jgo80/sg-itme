import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SeoService } from '../../../_services/seo.service';
import { Seo } from './seo';

@Component({
  selector: 'app-it-und-datenschutz-nach-eu-dsgvo',
  templateUrl: './it-und-datenschutz-nach-eu-dsgvo.component.html',
  providers: [Seo]
})
export class DatenschutzUndItSicherheitComponent implements OnInit {

    constructor(
        private router: Router,
        private seo: Seo,
        public seoService: SeoService,
    ) {
        // Monitor Router Events for Language and SEO
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.seoService.set(this.seo);
            }
        });
    }

  ngOnInit() {
  }

}
