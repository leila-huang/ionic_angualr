import {Component} from '@angular/core';
import {EventCenterService} from '../services/event-center.service';
import {LifeHook} from '../services/life-hook.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements LifeHook {

  constructor(private ev: EventCenterService) {
  }

  onPageWillClose(): void {
    console.log('Page Close...');
  }

  onPageWillEnter(): void {
    console.log('Page Enter...');
    this.ev.subscribe((data) => {
      console.log(data);
    });
  }

}
