import { Component, OnInit } from '@angular/core';
import {Application} from './application';
import {ApplicationService} from './service/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  applications: Application[];
  clonedApplications: { [s: string]: Application; } = {};

  constructor(private applicationService: ApplicationService) {
    this.applications = this.applicationService.getApplications();
  }

  ngOnInit(): void {

  }

  onRowEditInit(application: Application) {
    this.clonedApplications[application.uid] = {...application};
  }

  onRowEditSave(application: Application) {
  }

  onRowEditCancel(application: Application, index: number) {
  }


}
