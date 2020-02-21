import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventCenterService {
    public eventCenter: EventEmitter<any> = new EventEmitter<any>();

    constructor() {

    }

    emit(data: any) {
        // if (this.eventCenter.observers && this.eventCenter.observers.length > 1) {
        //     this.eventCenter.observers.
        // }
        this.eventCenter.emit(data);
    }

    subscribe(handle: (data: any) => void) {

        this.eventCenter.subscribe((data) => {
            handle(data);
        });
    }
}
