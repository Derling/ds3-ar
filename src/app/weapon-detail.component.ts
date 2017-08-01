import { Component, OnInit } from '@angular/core';
import { WeaponDataService } from './weapon-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'weapon-detail',
  templateUrl: 'weapon-detail.component.html'
})

export class WeaponDetailComponent implements OnInit {
  private _weapon = [];
  weapon : any;
  constructor(private service:WeaponDataService,
  private route: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {
	    this.route.params
          .switchMap((params: Params) => this.service.getWeapon(params['name']))
          .subscribe(weapon => this.assignWeapon(weapon));
  }
  assignWeapon(weapon) : void {
	  this._weapon.push(weapon);
	  this.weapon = this._weapon[0];
  }
  debug(weapon) {
	 console.log(this.weapon);
  }	 
}