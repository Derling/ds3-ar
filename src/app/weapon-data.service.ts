import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeaponDataService {
  private weaponsUrl = 'http://localhost:3000/weapons';
  constructor(private http: Http) {}
  getWeapons(): Promise<any> {
    return this.http.get(this.weaponsUrl)
                .toPromise()
                .then(response => response.json())
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
		  if(i.name == name) {
			  return i;
		  }
	  }
  }
}
