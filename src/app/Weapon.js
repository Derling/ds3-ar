"use strict";
exports.__esModule = true;
var Weapon = (function () {
    function Weapon(weapon) {
        this.weapon = weapon;
        this.baseDmg = 0;
        this.init();
    }
    Weapon.prototype.init = function () {
        this.baseDmg = +this.weapon['BasePhysical'] + +this.weapon['BaseMagic'] + +this.weapon['BaseFire']
            + +this.weapon['BaseLightning'] + +this.weapon['BaseDark'];
    };
    Weapon.prototype.getTotalBaseDmg = function () { return this.baseDmg; };
    Weapon.prototype.getName = function () { return this.weapon['weapon Name']; };
    Weapon.prototype.getBaseDmgs = function () {
        return { 'Physical': this.weapon['BasePhysical'],
            'Magic': this.weapon['BaseMagic'], 'Lightning': this.weapon['BaseLightning'],
            'Fire': this.weapon['BaseFire'], 'Dark': this.weapon['BaseDark'] };
    };
    Weapon.prototype.getType = function () { return this.weapon['weapon Type']; };
    Weapon.prototype.getIndexes = function () {
        return { 'Physical': this.weapon['PhysicalIndex'], 'Magic': this.weapon['MagicIndex'],
            'Fire': this.weapon['FireIndex'], 'Lightning': this.weapon['LightningIndex'],
            'Dark': this.weapon['DarkIndex'] };
    };
    Weapon.prototype.getScaling = function () {
        return { 'Str': this.weapon['Str'], 'Dex': this.weapon['Dex'], 'Int': this.weapon['Int'], 'Faith': this.weapon['Faith'], 'Luck': this.weapon['Luck'] };
    };
    return Weapon;
}());
exports.Weapon = Weapon;
