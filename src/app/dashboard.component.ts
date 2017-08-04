import { Component, OnInit } from '@angular/core';
import { WeaponDataService } from './weapon-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponnet implements OnInit {
  weapon = [];
  constructor(private service: WeaponDataService,
  private router: Router) {}
  ngOnInit(): void {    this.service.getWeapons().then(weapons =>
	this.weapon.push(weapons[Math.floor(Math.random() * weapons.length)]));
  }
  gotoDetail(w: any){
	this.router.navigate(['/detail',w.name]);  
  }
}