import { Component, OnInit } from '@angular/core';
import { WeaponDataService } from './weapon-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CLASSES } from './classes';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'weapon-detail',
  templateUrl: 'weapon-detail.component.html'
})

export class WeaponDetailComponent implements OnInit {
  private _weapon = [];
  private _classes = CLASSES;
  public currentClass = 0;
  public weapon : any;
  constructor(private service:WeaponDataService,
  private route: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {
	    this.route.params
          .switchMap((params: Params) => this.service.getWeapon(params['name']))
          .subscribe(weapon => this.assignWeapon(weapon));
		console.log(this._classes);
		console.log(this.currentClass);
  }
  assignWeapon(weapon) : void {
	  this._weapon.push(weapon);
	  this.weapon = this._weapon[0];
  }
  de(){
	  console.log(this.currentClass);
	  this.currentClass = 0;
	  console.log(this.currentClass);
  }
}