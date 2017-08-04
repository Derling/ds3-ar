import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { WeaponDataService } from './weapon-data.service';
import { WeaponDetailComponent } from './weapon-detail.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponnet } from './dashboard.component';
import { ViewWeaponsComponent } from './view-weapons.component';

@NgModule({
  declarations: [
    AppComponent, WeaponDetailComponent , DashboardComponnet,
    ViewWeaponsComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, AppRoutingModule,
    
  ],
  providers: [WeaponDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
