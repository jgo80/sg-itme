// Universal
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

// Component
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, UrlSegment } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    @Input() background: Boolean;

    url: any;
    menuMobile: any = false;

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const segments: UrlSegment[] = this.route.snapshot.url;
                if (segments[0]) {
                    this.url = segments[0].path;
                } else {
                    this.url = '';
                }
                this.menuMobile = false;

            }

            // Scroll to top
            if (isPlatformBrowser(this.platformId)) {
                window.scrollTo(0, 0);
            }
        });
    }

    ngOnInit() {
    }

}
