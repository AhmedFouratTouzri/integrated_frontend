import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse , HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-blog-details-three',
  templateUrl: './blog-details-three.component.html',
  styleUrls: ['./blog-details-three.component.scss']
})
export class BlogDetailsThreeComponent implements OnInit {

    public posts = [];
  constructor() { }

  ngOnInit(): void {
  }

}
