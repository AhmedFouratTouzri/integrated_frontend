import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../services/my-account.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  FormData: FormGroup;
    constructor(private builder: FormBuilder, private contact: MyAccountService ,private activatedRoute: ActivatedRoute, private routers: Router, private service: MyAccountService, private toast: ToastrService) {}
    user;
    msg;
    
    ngOnInit(): void {
    }


      onSubmit() {
        this.service.putUser(this.user).subscribe(response => {
          this.msg = response;
          this.toast.success('Account updated Succefully !');
          this.routers.navigate(['complaints']);},
          error => {
              this.toast.success('Your Listing Has Benn Added', 'Yaaay');

      });
      }
      
      
      

}
