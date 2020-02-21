import {Component} from '@angular/core';
import {EventCenterService} from '../services/event-center.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private ev: EventCenterService) {
  }

  click() {
    this.ev.emit('Tab2 Message.....');
  }
}
