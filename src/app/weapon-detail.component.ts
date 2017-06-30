import { Component, OnInit } from '@angular/core';
import { Weapon } from './Weapon';
import { WeaponDataService } from './weapon-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Calculator } from './Calculator';



@Component({
  selector: 'weapon-detail',
  templateUrl: 'weapon-detail.component.html'
})

export class WeaponDetailComponent implements OnInit {
  weapon: any; 
  constructor(private service:WeaponDataService,
  private route: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {
	    this.route.params
          .switchMap((params: Params) => this.service.getWeapon(params['name']))
          .subscribe(weapon => this.weapon = weapon);
  }
  debug(weapon: {}): void {
      console.log('object: ',weapon);
      let x: Weapon = new Weapon(weapon);
      console.log('weapon: ',x);
      let y: Calculator;
      y = new Calculator(x,{Str:40,Dex:40,Int:40,Faith:40,Luck:40});
      console.log('calculator: ',y);
  }
}