import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {MustMatch} from '../../../helpers/must-match.validator';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    form: FormGroup;
    submitted = false;

    constructor(public fb: FormBuilder,
                private http: HttpClient,
                private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
                name: ['', Validators.required],
                lastname: ['', Validators.required],
                password: ['', Validators.required],
                category: ['', Validators.required],
                adresse: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                phone: ['', Validators.required],
                city: ['', Validators.required],
                username: ['', Validators.required],
            }
        );
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }


    submitForm() {
        this.submitted = true;

        var formData: any = new FormData();
        formData.append('name', this.form.get('name').value);
        formData.append('lastname', this.form.get('lastname').value);
        formData.append('email', this.form.get('email').value);
        formData.append('username', this.form.get('username').value);
        formData.append('password', this.form.get('password').value);
        formData.append('adress', this.form.get('adresse').value);
        formData.append('phone', this.form.get('phone').value);


        this.http.post('http://localhost:8000/signup', formData).subscribe(
            (response) => this.toastr.success('You Have been Registred Succefully !', 'Congrats!'),
            (error) => this.toastr.success('You Have been Registred Succefully !', 'Congrats!'));
    }
}
