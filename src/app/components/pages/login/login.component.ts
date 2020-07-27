import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {map} from 'rxjs/operators';
import {AppSettings} from '../../../app.settings';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    error = '';

    constructor(private formBuilder: FormBuilder,
                private authenticationService: AuthenticationService,
                private router: Router,
                private http: Http,
                private toaster: ToastrService) {
        this.loginForm = formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    authenticate(user: any) {
           /* let body     = new URLSearchParams();
          body.append('username', user.username);
          body.append('password', user.password);
         const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        
          const options = new RequestOptions({headers}); */

        return this.http
            .post('http://127.0.0.1:8000/api/login_check', user).subscribe(data => {
                console.log('data', data);
                this.router.navigate(['/home']);
            }, error => {
                console.log('error', error);
                this.toaster.error('Invalid Credentials Please Verify Them and Try Again');
            });
    }

    onSubmit() {
        this.authenticate(this.loginForm.value);

    }

    ngOnInit(): void {
    }

}
