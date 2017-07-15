import { InMemoryDbService } from 'in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const weapons = [
{Name:'Dagger',Type:'Dagger',Str:'14',Dex:'98',Int:'0',Faith:'0',Luck:'0',BasePhysical:'116',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'9',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Heavy Dagger',Type:'Dagger',Str:'100.8',Dex:'0',Int:'0',Faith:'0',Luck:'0',BasePhysical:'107.3',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'9',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Sharp Dagger',Type:'Dagger',Str:'5.5',Dex:'147',Int:'0',Faith:'0',Luck:'0',BasePhysical:'107.3',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'9',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Refined Dagger',Type:'Dagger',Str:'84.8',Dex:'84.8',Int:'0',Faith:'0',Luck:'0',BasePhysical:'104.4',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'8',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Simple Dagger',Type:'Dagger',Str:'13',Dex:'91',Int:'112',Faith:'0',Luck:'0',BasePhysical:'63',BaseMagic:'72.45',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'0',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Crystal Dagger',Type:'Dagger',Str:'10',Dex:'70',Int:'132',Faith:'0',Luck:'0',BasePhysical:'59.85',BaseMagic:'81.9',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'0',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Fire Dagger',Type:'Dagger',Str:'0',Dex:'0',Int:'0',Faith:'0',Luck:'0',BasePhysical:'120.45',BaseMagic:'0',BaseFire:'120',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'0',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},

{Name:'Chaos Dagger',Type:'Dagger',Str:'12',Dex:'84',Int:'88',Faith:'88',Luck:'0',BasePhysical:'63',BaseMagic:'0',BaseFire:'82',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'0',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Lightning Dagger',Type:'Dagger',Str:'10',Dex:'70',Int:'0',Faith:'132',Luck:'0',BasePhysical:'59.85',BaseMagic:'0',BaseFire:'0',BaseLightning:'82',BaseDark:'0',PhysicalIndex:'0',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Deep Dagger',Type:'Dagger',Str:'0',Dex:'0',Int:'0',Faith:'0',Luck:'0',BasePhysical:'120.45',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'120',PhysicalIndex:'0',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Dark Dagger',Type:'Dagger',Str:'12',Dex:'84',Int:'88',Faith:'88',Luck:'0',BasePhysical:'63',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'82',PhysicalIndex:'0',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Poison Dagger',Type:'Dagger',Str:'14',Dex:'98',Int:'0',Faith:'0',Luck:'0',BasePhysical:'89.9',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'9',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Blood Dagger',Type:'Dagger',Str:'14',Dex:'98',Int:'0',Faith:'0',Luck:'0',BasePhysical:'89.9',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'9',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Raw Dagger',Type:'Dagger',Str:'0',Dex:'0',Int:'0',Faith:'0',Luck:'0',BasePhysical:'145',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'9',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name:'Blessed Dagger',Type:'Dagger',Str:'11',Dex:'77',Int:'0',Faith:'104',Luck:'0',BasePhysical:'81.9',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'9',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'},
{Name: 'Dark Falchion', Type: 'Curved Sword', Str: '30', Dex: '54', Int: '77', Faith: '77', Luck: '0', BasePhysical: '112', BaseMagic: '0', BaseFire: '0', BaseLightning: '0', BaseDark: '145.6', PhysicalIndex: '0', MagicIndex: '0', FireIndex: '0', LightningIndex: '0', DarkIndex: '0'},
{Name:'Rapier',Type:'Thrusting Sword',Str:'28',Dex:'84',Int:'0',Faith:'0',Luck:'0',BasePhysical:'190',BaseMagic:'0',BaseFire:'0',BaseLightning:'0',BaseDark:'0',PhysicalIndex:'0',MagicIndex:'0',FireIndex:'0',LightningIndex:'0',DarkIndex:'0'}];
    return {weapons};

  }
}

