import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input() event?: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
