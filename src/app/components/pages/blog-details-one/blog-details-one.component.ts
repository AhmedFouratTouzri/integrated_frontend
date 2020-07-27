import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../services/post.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-blog-details-one',
    templateUrl: './blog-details-one.component.html',
    styleUrls: ['./blog-details-one.component.scss']
})
export class BlogDetailsOneComponent implements OnInit {
    id: any;
    post;
    msg: string;
    test: any;

    constructor(private activatedRoute: ActivatedRoute, private routers: Router, private service: PostService, private toast: ToastrService) {
    }

    ngOnInit()
        :
        void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.service.getPostId(this.id).subscribe(post => {
            this.post = post;
        });
    }

    remove(id):
        void {
        const headers = new Headers({'Content-Type': 'application/json; charset = utf-8;'});
       // console.log(this.service.deletePost(id));
        this.service.deletepostt(id).subscribe(data => {
            this.toast.success('Blog Element Deleted With Success', 'Thank you');
            this.routers.navigate(['/complaints']);
        });
    }


}
