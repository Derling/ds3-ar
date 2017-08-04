import { Component, OnInit } from '@angular/core';
import { WeaponDataService } from './weapon-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'view-weapons',
  templateUrl: 'view-weapons.component.html',
  styleUrls:['./view-weapons.component.css']
})

export class ViewWeaponsComponent implements OnInit {
  weapons = [];
  constructor(private weaponService: WeaponDataService,
              private router: Router) {}

  ngOnInit(): void {
   this.getWeapons();
  }
  getWeapons() {
    this.weaponService.getWeapons()
		.then(weapons => this.weapons = weapons);
  }
  gotoDetail(weapon): void {
	  this.router.navigate(['/detail',weapon.name]);
  }
}
