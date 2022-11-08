import { Fallstudien } from '../../_data/fallstudien';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SeoService } from '../../_services/seo.service';
import { Seo } from './seo';

@Component({
    selector: 'app-fallstudien',
    templateUrl: './fallstudien.component.html',
    providers: [Seo]
})
export class FallstudienComponent implements OnInit {

    fallstudien = Fallstudien;
    currentFallstudien;
    areas;
    solutions;

    currentArea = '';
    currentSolution = '';

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
        this.getTags();
        this.applyFilter(this.currentArea, this.currentSolution);
    }

    // determine if number of Fallstudien is odd
    isOdd(num) { return num % 2; }

    // shuffle Fallstudien
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    getTags() {
        this.areas = [];
        this.solutions = [];

        this.fallstudien.forEach(fallstudie => {

            // Areas
            if (this.areas.length === 0) {
                this.areas.push({ name: fallstudie.area, count: 1 });
            } else {
                let done = false;
                this.areas.forEach(area => {
                    if (area.name === fallstudie.area) {
                        area.count += 1;
                        done = true;
                    }
                });
                if (!done) {
                    this.areas.push({ name: fallstudie.area, count: 1 });
                }
            }

            // Solutions
            if (this.solutions.length === 0) {
                this.solutions.push({ name: fallstudie.solution, count: 1 });
            } else {
                let done = false;
                this.solutions.forEach(solution => {
                    if (solution.name === fallstudie.solution) {
                        solution.count += 1;
                        done = true;
                    }
                });
                if (!done) {
                    this.solutions.push({ name: fallstudie.solution, count: 1 });
                }
            }

        });

        this.sortArray(this.areas);
        this.sortArray(this.solutions);

    }

    sortArray(array) {
        array.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    }

    filterSolution(name) {
        this.currentSolution = name;
        this.applyFilter(this.currentArea, this.currentSolution);
    }

    filterArea(name) {
        this.currentArea = name;
        this.applyFilter(this.currentArea, this.currentSolution);
    }

    applyFilter(currentArea, currentSolution) {
        this.currentFallstudien = [];

        this.fallstudien.forEach(fallstudie => {

            if (!currentArea && !currentSolution) {
                this.currentFallstudien.push(fallstudie);
            } else if (currentArea && !currentSolution) {
                if (fallstudie.area === currentArea) {
                this.currentFallstudien.push(fallstudie);
                }
            } else if (!currentArea && currentSolution) {
                if (fallstudie.solution === currentSolution) {
                this.currentFallstudien.push(fallstudie);
                }
            } else if (currentArea && currentSolution) {
                if (fallstudie.solution === currentSolution && fallstudie.area === currentArea) {
                this.currentFallstudien.push(fallstudie);
                }
            }

        });

        this.shuffle(this.currentFallstudien);
    }

}
