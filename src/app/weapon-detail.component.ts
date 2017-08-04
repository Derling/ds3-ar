import { Component, OnInit } from '@angular/core';
import { WeaponDataService } from './weapon-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CLASSES } from './Classes';
import 'rxjs/add/operator/switchMap';
import { Calculator } from './Calculator';



@Component({
  selector: 'weapon-detail',
  templateUrl: 'weapon-detail.component.html'
})

export class WeaponDetailComponent implements OnInit {
  private _weapon = [];
  private infusions = ['Blessed','Blood','Chaos','Crystal','Dark',
	'Deep','Fire','Heavy','Hollow','Lightning','Normal','Poison','Raw','Refined',
	'Sharp','Simple'];
  private _classes = CLASSES;
  public currentClass = 0;
  public currentLevel: number;
  public stats : {};
  private infIndex = 10;
  public url = '';
  public calculator : Calculator;
  public base_dmgs : {};
  public infStr = this.infusions [this.infIndex];
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
	  this.calculator = new Calculator(this._weapon[0],this.infusions[this.infIndex],this.stats);
	  for(let index in this._weapon[0].name){
			if (this._weapon[0].name.charAt(index) == "'") {
					this.url += '';
			}
			else if(this._weapon[0].name.charAt(index) == ' ') {
				this.url += '_';
			}
			else { this.url += this._weapon[0].name.charAt(index); }
	  }
	  this.base_dmgs = this.calculator.weapon['base_damages'][this.infStr];
	  
	  
  }
  statChange(stat : string, increment : number){
	  this.stats[stat] = this.stats[stat] + increment;
	  this.currentLevel += increment;
	  this.calculator = new Calculator(this._weapon[0],this.infusions[this.infIndex],this.stats);
  }
  update(){
	  this.currentLevel = this._classes[this.currentClass].level;
	  this.stats = {str : this._classes[this.currentClass].str,
				dex : this._classes[this.currentClass].dex,
				int : this._classes[this.currentClass].int,
				faith : this._classes[this.currentClass].faith,
				luck : this._classes[this.currentClass].luck};
  }
  changeInfusion() {
	  this.infStr = this.infusions[this.infIndex];
	  this.base_dmgs = this.calculator.weapon['base_damages'][this.infStr];
	  this.calculator = new Calculator(this._weapon[0],this.infusions[this.infIndex],this.stats);
	  
  }
  evaluateStats(): boolean {
	  return (this.stats['str'] >= this._weapon[0].basic_data.str_req) &&
			 (this.stats['dex'] >= this._weapon[0].basic_data.dex_req) &&
			 (this.stats['int'] >= this._weapon[0].basic_data.int_req) && 
			 (this.stats['faith'] >= this._weapon[0].basic_data.faith_req);
  }
  floor(num : number): number {
	  return Math.floor(num);
  }
  round(num : number) : number {
	  return Math.round(num);
  }
}