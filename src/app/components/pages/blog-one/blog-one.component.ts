import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';

@Component({
    selector: 'app-blog-one',
    templateUrl: './blog-one.component.html',
    styleUrls: ['./blog-one.component.scss']
})
export class BlogOneComponent implements OnInit {
    public post = [];

    constructor(public api: PostService) {
    }

    ngOnInit(): void {
        this.api.getpost().subscribe(data => {
            console.log(data);
            this.post = data;
        });
    }

}
