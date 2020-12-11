import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-side-timer',
  templateUrl: './side-timer.component.html',
  styleUrls: ['./side-timer.component.scss']
})
export class SideTimerComponent {

  toggled = false;

  onToggle(event){
    this.toggled = !this.toggled;

  }

}
