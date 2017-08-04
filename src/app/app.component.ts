import { Component } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { WeaponDataService } from './weapon-data.service';
import { Calculator } from './Calculator';

@Component({
  selector: 'app-root',
  template: `
  <html>
	<head>
	</head>
	<body>
    <div id='main-div'>
        <h1 class='center'>{{title}}</h1>
		<div>
        <nav class='center'>
			<a routerLink='/'>Dashboard</a>
			<a routerLink='all'>View Weapons</a>
        </nav>
		</div>
		<router-outlet></router-outlet>
	</div>
	</body>
  </html>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Dark Souls 3 AR Calculator';
}

