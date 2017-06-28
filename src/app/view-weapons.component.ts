import { Component, OnInit } from '@angular/core';
import { WeaponDataService } from './weapon-data.service';
import { Router } from '@angular/router';
import { Weapon } from './Weapon';

@Component({
  selector: 'view-weapons',
  templateUrl: 'view-weapons.component.html'
})

export class ViewWeaponsComponent implements OnInit {
  weapons: Weapon[] = [];
  selected: any;
  constructor(private weaponService: WeaponDataService,
              private router: Router) {}
  ngOnInit(): void {   this.getWeapons();
  }
  getWeapons() {
    this.weaponService.getWeapons().then(weapons => this.weapons = weapons);
  }
  onSelect(w: {}){
	  this.selected = w;
	  console.log(w);
	  console.log(this.selected.Name);
	}
  gotoDetail(): void {
	  this.router.navigate(['/detail',this.selected.Name]);
  }
}
