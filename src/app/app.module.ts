import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { SwitchComponent } from './switch/switch.component';
import { MissionService } from './mission.service';

@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
