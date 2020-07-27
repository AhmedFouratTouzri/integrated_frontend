import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmplacementService} from '../../../services/emplacement.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {
    id: any;
    emplacement;
  constructor(private activatedRoute: ActivatedRoute, private routers: Router, private service: EmplacementService) { }

  ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params.id;
      this.service.getOneEmp(this.id).subscribe(emp => {
          this.emplacement = emp;
      });
  }

}
