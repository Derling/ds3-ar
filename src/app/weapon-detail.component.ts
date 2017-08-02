import { Component, OnInit } from '@angular/core';
import { WeaponDataService } from './weapon-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CLASSES } from './classes';
import 'rxjs/add/operator/switchMap';
import { Calculator } from './calculator';



@Component({
  selector: 'weapon-detail',
  templateUrl: 'weapon-detail.component.html'
})

export class WeaponDetailComponent implements OnInit {
  private _weapon = [];
  private _classes = CLASSES;
  public currentClass = 0;
  public weapon : {};
  public currentLevel: number;
  public stats : {};
  infusion = 'Normal';
  constructor(private service:WeaponDataService,
  private route: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {
	    this.route.params
          .switchMap((params: Params) => this.service.getWeapon(params['name']))
          .subscribe(weapon => this.assignWeapon(weapon));
		this.update();
  }
  assignWeapon(weapon) : void {
	  this._weapon.push(weapon);
	  this.weapon = this._weapon[0];
  }
  change(stat : string, increment : number){
	  this.stats[stat] = this.stats[stat] + increment;
	  this.currentLevel += increment;
	  console.log(new Calculator(this.weapon,this.infusion,this.stats));
  }
  update(){
	  this.currentLevel = this._classes[this.currentClass].level;
	  this.stats = {str : this._classes[this.currentClass].str,
				dex : this._classes[this.currentClass].dex,
				int : this._classes[this.currentClass].int,
				faith : this._classes[this.currentClass].faith,
				luck : this._classes[this.currentClass].luck};
  }
}