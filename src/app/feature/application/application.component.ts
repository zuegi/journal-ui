import { Component, OnInit } from '@angular/core';
import {Application} from './application';
import {ApplicationService} from './service/application.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  applications: Application[];
  clonedApplications: { [s: string]: Application; } = {};

  constructor(private applicationService: ApplicationService, private router: Router) {
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


  backToSettings() {
    this.router.navigateByUrl('settings')
  }

  newRow() {
    return { uid: '', name: '' }
  }
}
