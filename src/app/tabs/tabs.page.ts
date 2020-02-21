import {Component, OnInit, ViewChild} from '@angular/core';
import {RouterHandleService} from '../services/router-handle.service';
import {IonTabs} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  @ViewChild(IonTabs, {static: true})
  tabs: IonTabs;

  constructor(private outlet: RouterHandleService) {
  }

  ngOnInit(): void {
    // 在tabs 里面还有一个路由插件，这里面是tab的页面内容
    this.outlet.routerHandle(this.tabs.outlet);
  }
}
