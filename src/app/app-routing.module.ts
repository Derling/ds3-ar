import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeaponDetailComponent } from './weapon-detail.component';
import { DashboardComponnet } from './dashboard.component';
import { ViewWeaponsComponent } from './view-weapons.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path:'all' , component:ViewWeaponsComponent},
  { path:'dashboard', component:DashboardComponnet},
  { path:'detail/:name', component:WeaponDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
