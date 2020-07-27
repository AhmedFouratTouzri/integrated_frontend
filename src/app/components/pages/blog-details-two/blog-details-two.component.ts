import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from '../../../services/post.service';
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-blog-details-two',
    templateUrl: './blog-details-two.component.html',
    styleUrls: ['./blog-details-two.component.scss']
})
export class BlogDetailsTwoComponent implements OnInit {
    id: any;
    post;
    eve: any;
    msg: string;
    test: any;

    constructor(private activatedRoute: ActivatedRoute, private routers: Router, private service: PostService, private toast: ToastrService) {
    }

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.service.getPostId(this.id).subscribe(evt => {
            this.post = evt;
        });
    }

    putPost() {
        // this.emplacement.photo = this.namePhoto;
        //  console.log(formulaire.value);
        this.service.putpost(this.post).subscribe(response => {
            this.msg = response;
            this.toast.success('Your Complaints Has been Updated Succefully , Yaay');
            this.routers.navigate(['complaints']);},
            error => {
                this.toast.success('Your Complaints Has Benn Added', 'Yaaay');

        });
    }

}
