import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Weapon } from './Weapon';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeaponDataService {
  private weaponsUrl = 'api/weapons';
  constructor(private http: Http) {}
  getWeapons(): Promise<any> {
    return this.http.get(this.weaponsUrl)
                .toPromise()
                .then(response => response.json().data)
                .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occured',error);
  }
  getWeapon(name: string): any {
	return this.getWeapons().then(weapons => this.findWeapon(weapons,name));
  }
  findWeapon(weapons: any,name: string) {
	  for(let i of weapons) {
		  if(i.Name == name) {
			  return i;
		  }
	  }
  }
}
