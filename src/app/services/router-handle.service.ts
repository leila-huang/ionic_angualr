import {Injectable} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {IonRouterOutlet} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class RouterHandleService {

    constructor() {
    }


    routerHandle(outlet: IonRouterOutlet) {
        // 当路由激活进入页面且页面有自定义生命周期时，开始处理操作
        outlet.activateEvents.subscribe((component: any) => {
            this.handleRouterEnter(component);
        });
        // 当路由退出该页面且页面有自定义生命周期时，开始处理操作
        outlet.deactivateEvents.subscribe((component: any) => {
            this.handleRouterClose(component);
        });
    }

    /**
     *  当进入页面时
     * @param component
     */
    private handleRouterEnter(component) {
        if (component.onPageWillEnter) {
            component.onPageWillEnter();
        }
    }

    /**
     *  当页面关闭时
     * @param component
     */
    private handleRouterClose(component) {
        if (component.onPageWillClose) {
            component.onPageWillClose();
        }
    }
}
