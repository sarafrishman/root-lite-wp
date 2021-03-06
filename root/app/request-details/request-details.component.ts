import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../_classes/request';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'request-details',
  template: `<div  #requestForm (submit)="onSubmit()">
        <div class="request-header">
            <div>
                <div class="request-title">{{request.title}}</div>
                <div class="subtitle">
                    <div>{{request.title}}</div>
                    <div>{{request.due | date:shortDate}}</div>
                </div>
            </div>
            <div class="request-status" *ngIf="request.status" [style.background-color]="request.getStatusColor()">{{request.status}}</div>
        </div>
        <div class="request-desc">
            <div>description</div>
            <textarea type="text">{{request.description}}</textarea>
        </div>
    </div>`
})
export class RequestDetailsComponent implements OnInit {
  @Input() request: Request;
  documentName: string;
  onSubmit(): void {
      console.log("re",this.request);
  }
   handleInputChange(e) {
        let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        this.documentName = file.name;
    }

  constructor() {
   }

  ngOnInit() {
    console.log(this.request, 'sdsadfsdf');
  }

}
