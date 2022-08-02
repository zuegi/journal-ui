import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApplicationService} from '../../application/service/application.service';

export interface Query {
  query: string;
}

@Component({
  selector: 'app-journal-new',
  templateUrl: './journal-new.component.html',
  styleUrls: ['./journal-new.component.scss']
})
export class JournalNewComponent implements OnInit {

  query?: Query;
  queryString?: String;
  showLabel: boolean = false;
  currentDate: Date = new Date();
  applications: any;
  selectedApplication: any;
  text: any;

  constructor(private router: Router, private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.query=history.state;
    this.queryString = this.query?.query;
    if (this.queryString != null) {
     this.showLabel = true;
    }

    this.applications = this.applicationService.getApplications()
  }

  main() {
    this.router.navigateByUrl("main")
  }
}
