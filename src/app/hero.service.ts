/**
 * Created by @chaoge on 2017/5/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  /*
  * 同步调用
  * */
  /*getHeroes(): Hero[] {
    return HEROES;
  };*/
  /*通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器。--异步实现
  * */
   /*getHeroes(): Promise<Hero[]> {
     return Promise.resolve(HEROES);
   }*/
  /*
  *http请求
  * */
  constructor(private http: Http) { }
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  /**
   * getHero()方法，它会根据id从getHeroes()中过滤英雄列表。
   */
  /*getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }*/
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }
  private headers = new Headers({'Content-Type': 'application/json'});
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
}
