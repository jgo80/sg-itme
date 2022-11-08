// Universal
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

// Service
import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';

// config
import { environment } from '../../environments/environment';
declare var require: any;

@Injectable()
export class SeoService {

    // workaround as Renderer2 normaly can not be called within a Service
    private renderer2: Renderer2;

    constructor(
        @Inject(DOCUMENT) private document,
        @Inject(PLATFORM_ID) private platformId: Object,
        rendererFactory2: RendererFactory2,
        private titleService: Title,
        private metaService: Meta,
        public route: ActivatedRoute,
        private router: Router,
    ) {
        // workaround as Renderer2 normaly can not be called within a Service
        this.renderer2 = rendererFactory2.createRenderer(null, null);
    }

    set(seo) {
        // Set SEO meta
        this.titleService.setTitle(seo.title + ' | ' + require('../../../package.json').sg_config.title);
        this.metaService.updateTag({ name: 'robots', content: seo.robots });
        this.metaService.updateTag({ name: 'description', content: seo.meta_description });
        this.metaService.updateTag({ property: 'og:type', content: 'website' });
        this.metaService.updateTag({ property: 'og:title', content: seo.title + ' | ' + require('../../../package.json').sg_config.title });
        this.metaService.updateTag({ property: 'og:description', content: seo.meta_description });
        this.metaService.updateTag({ property: 'og:url', content: environment.baseUrl.substring(0, environment.baseUrl.length - 1) + this.router.routerState.snapshot.url });
        this.setAnalyticsPageView();
    }

    // Google Analytics functions

    setupAnalytics() {
        // const analytics = this.renderer2.createElement('script');
        // analytics.type = 'text/javascript';
        // analytics.src = 'https://www.googletagmanager.com/gtag/js?id=' + require('../../../package.json').sg_config.googleAnalytics;
        // this.renderer2.setAttribute(analytics, 'async', '');
        // this.renderer2.appendChild(this.document.body, analytics);
    }

    setAnalyticsPageView() {
        // if (isPlatformBrowser(this.platformId)) {
        //     const pageview = this.renderer2.createElement('script');
        //     pageview.type = 'text/javascript';
        //     pageview.text = `
        //     window.dataLayer = window.dataLayer || [];
        //     function gtag() { dataLayer.push(arguments); }
        //     gtag('js', new Date());
        //     gtag('config', '${require('../../../package.json').sg_config.googleAnalytics}', {
        //         'page_path': location.pathname
        //     });
        //     `;
        //     this.renderer2.appendChild(this.document.body, pageview);
        // }
    }

}
