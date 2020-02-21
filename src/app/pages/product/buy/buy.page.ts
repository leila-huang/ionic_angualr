import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EventCenterService} from '../../../services/event-center.service';

@Component({
    selector: 'app-buy',
    templateUrl: './buy.page.html',
    styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private ev: EventCenterService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            console.log(params['b']);
        });
    }

    click() {
        this.ev.emit('buy Message.....');
        console.log('buy');
        this.router.navigateByUrl('/tabs/tab3');
    }
}
