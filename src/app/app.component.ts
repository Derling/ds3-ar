import { Component } from '@angular/core';
import { Weapon } from './WEapon';
import 'rxjs/add/operator/toPromise';
import { WeaponDataService } from './weapon-data.service';
import { Calculator } from './Calculator';

@Component({
  selector: 'app-root',
  template: `
    <div>
        <h1>{{title}}</h1>
        <nav>
        <a routerLink='/'>Dashboard</a>
        <a routerLink='all'>View Weapons</a>
        </nav>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ds3-app';
  selectedWeapon: Weapon;
  changeSelectedWeapon(weapon:Weapon) {
    this.selectedWeapon = weapon;
  }
}

