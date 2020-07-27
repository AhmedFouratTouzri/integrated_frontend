import { Component, OnInit } from '@angular/core';
import {EmplacementService} from '../../../services/emplacement.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listing-one',
  templateUrl: './listing-one.component.html',
  styleUrls: ['./listing-one.component.scss']
})
export class ListingOneComponent implements OnInit {
    listemplaclent: any;
    id: number;
    msgsucess: string;
  constructor(        private service: EmplacementService,
                      private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params.id;
      this.service.getemplacement().subscribe(data => {
          this.listemplaclent = data;
          console.log(this.listemplaclent);
      });

  }

}
