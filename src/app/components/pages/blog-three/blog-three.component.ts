import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {PostService} from '../../../services/post.service';
import { HttpClient, HttpResponse , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-blog-three',
  templateUrl: './blog-three.component.html',
  styleUrls: ['./blog-three.component.scss']
})
export class BlogThreeComponent implements OnInit {
    public posts = [];
    constructor(private api: PostService) { }

    ngOnInit(): void {
        this.api.getpost().subscribe(data => {
            console.log(data);
            this.posts = data; });
    }

}
