"use strict";
exports.__esModule = true;
var saturation_index_service_1 = require("./saturation-index.service");
var Calculator = (function () {
    function Calculator(weapon, stats) {
        this.weapon = weapon;
        this.stats = stats;
        this.saturation = saturation_index_service_1.SATURATION;
        this.bonusPhysical = 0;
        this.bonusMagic = 0;
        this.bonusLightning = 0;
        this.bonusFire = 0;
        this.bonusDark = 0;
        this.bonusLuck = 0;
        this.totalDmg = 0;
        this.init();
    }
    Calculator.prototype.init = function () {
        this.calculateBonuses();
        this.calculateTotalDmg();
    };
    Calculator.prototype.calculateBonuses = function () {
        this.calculateBonusPhysical();
        this.calculateBonusMagic();
        this.calculateBonusLightning();
        this.calculateBonusFire();
        this.calculateBonusDark();
        this.calculateBonusLuck();
    };
    Calculator.prototype.calculateTotalDmg = function () {
        this.totalDmg = Math.floor(this.weapon.getTotalBaseDmg() + this.bonusPhysical +
            this.bonusMagic + this.bonusFire + this.bonusLightning + this.bonusDark +
            this.bonusLuck);
    };
    Calculator.prototype.calculateBonusLuck = function () {
        this.bonusLuck = +this.weapon.getBaseDmgs()['Physical'] * ((+this.weapon.getScaling()['Luck']) / 100 * this.getSaturation(this.weapon.getIndexes()['Physical'], this.stats['Luck']) / 100);
    };
    Calculator.prototype.calculateBonusDark = function () {
        this.bonusDark = +this.weapon.getBaseDmgs()['Dark'] * ((+this.weapon.getScaling()['Int']) / 100 * this.getSaturation(this.weapon.getIndexes()['Dark'], this.stats['Int']) / 100 +
            (+this.weapon.getScaling()['Faith']) / 100 * this.getSaturation(this.weapon.getIndexes()['Dark'], this.stats['Faith']) / 100);
    };
    Calculator.prototype.calculateBonusFire = function () {
        this.bonusFire = +this.weapon.getBaseDmgs()['Fire'] * ((+this.weapon.getScaling()['Int']) / 100 * this.getSaturation(this.weapon.getIndexes()['Fire'], this.stats['Int']) / 100 +
            (+this.weapon.getScaling()['Faith']) / 100 * this.getSaturation(this.weapon.getIndexes()['Fire'], this.stats['Faith']) / 100);
    };
    Calculator.prototype.calculateBonusLightning = function () {
        this.bonusLightning = +this.weapon.getBaseDmgs()['Lightning'] * (+this.weapon.getScaling()['Faith']) / 100 * this.getSaturation(this.weapon.getIndexes()['Lightning'], this.stats['Faith']) / 100;
    };
    Calculator.prototype.calculateBonusMagic = function () {
        this.bonusMagic = +this.weapon.getBaseDmgs()['Magic'] * ((+this.weapon.getScaling()['Int']) / 100 * this.getSaturation(this.weapon.getIndexes()['Magic'], this.stats['Int']) / 100);
    };
    Calculator.prototype.calculateBonusPhysical = function () {
        this.bonusPhysical = +this.weapon.getBaseDmgs()['Physical'] * ((+this.weapon.getScaling()['Str']) / 100 * this.getSaturation(this.weapon.getIndexes()['Physical'], this.stats['Str']) / 100 +
            (+this.weapon.getScaling()['Dex']) / 100 * this.getSaturation(this.weapon.getIndexes()['Physical'], this.stats['Dex']) / 100);
    };
    Calculator.prototype.getSaturation = function (index, level) {
        for (var _i = 0, _a = this.saturation; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i['Curve Index'] == index) {
                return +i['Level ' + level];
            }
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
