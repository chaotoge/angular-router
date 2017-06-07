/**
 * Created by @chaoge on 2017/5/18.
 */

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  gotoDetail(hero: Hero): void {
    this.router.navigate(['/detail', hero.id]);
  }
}
