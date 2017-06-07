/**
 * Created by @chaoge on 2017/5/18.
 */
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html' ,
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  constructor(
    private router: Router,
    private heroService: HeroService) { };
  /*getHeroes(): void {
   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   }*/
  /*
   * 变成基于承诺的，并在承诺的事情被解决时再行动。 一旦承诺的事情被成功解决（Resolve） 回调函数作为参数传给承诺对象的then方法
   * */
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * 导航到详情页
   */

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
