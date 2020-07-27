import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {CategoryService} from '../../../services/category.service';
import {ProductService} from '../../../product.service';

@Component({
    selector: 'app-home-four',
    templateUrl: './home-four.component.html',
    styleUrls: ['./home-four.component.scss']
})
export class HomeFourComponent implements OnInit {
    lastlistings = [];
    homeblogs = [];
    public category = [];
    public product = [];
    id: any;

    constructor(private home: HomeService, private api: CategoryService, private ps: ProductService) {
    }

    ngOnInit(): void {
        this.home.getlastlistings().subscribe(data => {
            console.log(data);
            this.lastlistings = data;
        });
        this.home.getblogsHome().subscribe(data => {
            console.log(data);
            this.homeblogs = data;
        });
        this.api.getcategorys().subscribe(data => {
            console.log(data);
            this.category = data;
        });
    }

}
