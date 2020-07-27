import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {PostService} from '../../../services/post.service';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileService} from '../../../services/file.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-blog-two',
    templateUrl: './blog-two.component.html',
    styleUrls: ['./blog-two.component.scss']
})
export class BlogTwoComponent implements OnInit {
    public posts = [];
    form: FormGroup;

    private file;

    constructor(private api: PostService,
                public fb: FormBuilder,
                private http: HttpClient,
                private toastr: ToastrService) {
        this.form = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            contenu: ['', Validators.required],
            image: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.api.getpost().subscribe(data => {
            console.log(data);
            this.posts = data;
        });
    }

    onSelectedFile(event) {
        if (event.target.files.length > 0) {
            this.form.get('image').setValue(this.file);
        }

    }

    submitForm() {
        var formData: any = new FormData();
        formData.append('title', this.form.get('title').value);
        formData.append('description', this.form.get('description').value);
        formData.append('contenu', this.form.get('contenu').value);
        formData.append('image', this.form.get('image').value);

        this.http.post('http://localhost:8000/post/add', formData).subscribe(
            (response) => this.toastr.success('You Have been Registred Succefully !', 'Congrats!'),
            (error) => console.log(error)
        );
    }
}
