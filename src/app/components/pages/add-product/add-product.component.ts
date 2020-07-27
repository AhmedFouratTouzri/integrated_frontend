import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../../../services/post.service';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
    form: NgForm;
    msg: string;
    private errorMessage: string;

    constructor(private api: PostService, private toast: ToastrService, private router: Router) {

    }

    ngOnInit(): void {
    }

    addpost(form) {
        const user_id = form.value.user_id;
        const date_publication = form.value.date_publication;
        const titre = form.value.titre;
        const description = form.value.description;
        const Contenu = form.value.Contenu;
        const image = form.value.image;
        console.log(form.value);
        this.api.postpost(form.value).subscribe(reponse => {
                this.toast.success('Your Complaint Has Benn Added', 'Yaaay');
                this.router.navigate(['complaints']);
            },
            error => {
                this.toast.success('Your Complaint Has Benn Added', 'Yaaay');
            });
    }
}
