import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';


@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

missions;
  constructor(private missionSvc:MissionService){}

  ngOnInit(){
    this.missionSvc.get().subscribe(m => this.missions = m);
  }

  onSwitched($event){
    console.log("from mission-list:" + $event.id + " - " + $event.value);
    
  }
}
