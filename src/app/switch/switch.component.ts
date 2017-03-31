import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
    <label class="switch">
      <input id="switch" type="checkbox" [(ngModel)]="checked">
      <div class="slider round"></div>
    </label> 
      <span class="status">{{status}}</span>
  `,
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent  {

  status:string;
  checkValue:boolean;
  @Output() checkedChange = new EventEmitter();
  
  @Input() id:number;

  @Input()
  get checked() {
    return this.checkValue;
  }
  
  set checked(val) {
    this.status = val? 'en cours' : 'terminée';
    this.checkValue = val;
    this.checkedChange.emit({id:this.id , value :this.checkValue});
    //console.log("from switch: value = " + this.checkValue);    
  }



}
