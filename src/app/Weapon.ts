export class Weapon {
  baseDmg: number = 0;
  constructor(private weapon: {}) { this.init() }
  init(): void {
    this.baseDmg = +this.weapon['BasePhysical'] + +this.weapon['BaseMagic'] + +this.weapon['BaseFire']
      + +this.weapon['BaseLightning'] + +this.weapon['BaseDark'];
  }
  public getTotalBaseDmg(): number { return this.baseDmg; }
  public getName(): string { return this.weapon['weapon Name']; }
  public getBaseDmgs(): {} {
    return  {'Physical': this.weapon['BasePhysical'],
      'Magic': this.weapon['BaseMagic'], 'Lightning': this.weapon['BaseLightning'],
      'Fire': this.weapon['BaseFire'], 'Dark': this.weapon['BaseDark']}
  }
  public getType() { return this.weapon['weapon Type']}
  public getIndexes(): {} {
    return {'Physical': this.weapon['PhysicalIndex'], 'Magic': this.weapon['MagicIndex'],
            'Fire': this.weapon['FireIndex'], 'Lightning': this.weapon['LightningIndex'],
            'Dark': this.weapon['DarkIndex']};
  }
  public getScaling(): {} {
    return {'Str': this.weapon['Str'], 'Dex': this.weapon['Dex'], 'Int': this.weapon['Int'], 'Faith': this.weapon['Faith'], 'Luck': this.weapon['Luck']};
  }
}
