import { Component } from '@angular/core';
import { Weapon } from './Weapon';
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
		<router-outlet></router-outlet>
	</div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Dark Souls 3 AR Calculator';
  selectedWeapon: Weapon;
  changeSelectedWeapon(weapon:Weapon) {
    this.selectedWeapon = weapon;
  }
}

