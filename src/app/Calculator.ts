import { Weapon } from './Weapon';
import { SATURATION } from './saturation-index.service';

export class Calculator {
  saturation = SATURATION;
  bonusPhysical = 0;
  bonusMagic = 0;
  bonusLightning = 0;
  bonusFire = 0;
  bonusDark = 0;
  bonusLuck = 0;
  totalDmg = 0;
  constructor(public weapon: Weapon, public stats: {}) { this.init(); }
    private init(): void {
      this.calculateBonuses();
      this.calculateTotalDmg();
    }
    private calculateBonuses(): void {
    this.calculateBonusPhysical();
    this.calculateBonusMagic();
    this.calculateBonusLightning();
    this.calculateBonusFire();
    this.calculateBonusDark();
    this.calculateBonusLuck();
  }
  private calculateTotalDmg(): void {
    this.totalDmg = Math.floor(this.weapon.getTotalBaseDmg() + this.bonusPhysical +
      this.bonusMagic + this.bonusFire + this.bonusLightning + this.bonusDark +
      this.bonusLuck);
  }
  private calculateBonusLuck(): void {
     this.bonusLuck = +this.weapon.getBaseDmgs()['Physical'] * ((+this.weapon.getScaling()['Luck'])/100 * this.getSaturation(this.weapon.getIndexes()['Physical'],this.stats['Luck'])/100);
  }
  private calculateBonusDark(): void {
    this.bonusDark =  +this.weapon.getBaseDmgs()['Dark'] * ((+this.weapon.getScaling()['Int'])/100 * this.getSaturation(this.weapon.getIndexes()['Dark'],this.stats['Int'])/100 +
        (+this.weapon.getScaling()['Faith'])/100 * this.getSaturation(this.weapon.getIndexes()['Dark'],this.stats['Faith'])/100);
  }
  private calculateBonusFire(): void {
    this.bonusFire = +this.weapon.getBaseDmgs()['Fire'] * ((+this.weapon.getScaling()['Int'])/100 * this.getSaturation(this.weapon.getIndexes()['Fire'],this.stats['Int'])/100 +
        (+this.weapon.getScaling()['Faith'])/100 * this.getSaturation(this.weapon.getIndexes()['Fire'],this.stats['Faith'])/100);
  }
  private calculateBonusLightning(): void {
    this.bonusLightning = +this.weapon.getBaseDmgs()['Lightning'] * (+this.weapon.getScaling()['Faith'])/100 * this.getSaturation(this.weapon.getIndexes()['Lightning'],this.stats['Faith'])/100;
  }
  private calculateBonusMagic(): void {
    this.bonusMagic = +this.weapon.getBaseDmgs()['Magic'] * ((+this.weapon.getScaling()['Int'])/100 * this.getSaturation(this.weapon.getIndexes()['Magic'],this.stats['Int'])/100)
  }
  private calculateBonusPhysical(): void {
    console.log((this.weapon.getScaling()['Str'])/100);
    this.bonusPhysical = +this.weapon.getBaseDmgs()['Physical'] * ((+this.weapon.getScaling()['Str'])/100 * this.getSaturation(this.weapon.getIndexes()['Physical'],this.stats['Str'])/100 +
        (+this.weapon.getScaling()['Dex'])/100 * this.getSaturation(this.weapon.getIndexes()['Physical'],this.stats['Dex'])/100);
  }
  private getSaturation(index: string, level: string): number {
    for(const i of this.saturation) {
      if(i['Curve Index'] == index) {
        return +i['Level ' + level];
      }
    }
  }
}
