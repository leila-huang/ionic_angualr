import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    data: string;

    constructor(private router: Router, public route: ActivatedRoute) {

    }

    ngOnInit() {
        // this.route.queryParams.subscribe((data) => {
        //     console.log(data);
        //
        // });
        // this.data = this.route.snapshot.paramMap.get('id');
        // console.log('产品详情页ID' + this.data);

    }

    toBuy() {
        this.router.navigate(['/buy'], {queryParams: {a: 20, b: 23}});
    }
}
