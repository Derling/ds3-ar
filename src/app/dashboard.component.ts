import { Component, OnInit } from '@angular/core';
import { Weapon } from './Weapon';
import { WeaponDataService } from './weapon-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponnet implements OnInit {
  weapon: Weapon[] = [];
  constructor(private service: WeaponDataService,
  private router: Router) {}
  ngOnInit(): void {    this.service.getWeapons().then(weapons => 
	this.weapon.push(weapons[Math.floor(Math.random()*weapons.length)]));
  }
  gotoDetail(w: any){
	  console.log('to go');
	this.router.navigate(['/detail',w.Name]);  
  }
}