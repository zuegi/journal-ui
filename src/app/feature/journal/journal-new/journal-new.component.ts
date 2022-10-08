import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApplicationService} from '../../application/service/application.service';
import {MenuItem} from 'primeng/api';
import {BreadcrumbModule} from 'primeng/breadcrumb';

export interface Query {
  query: string;
}

@Component({
  selector: 'app-journal-new',
  templateUrl: './journal-new.component.html',
  styleUrls: ['./journal-new.component.scss']
})
export class JournalNewComponent implements OnInit,DoCheck {

  query?: Query;
  queryString?: String;
  showLabel: boolean = false;
  currentDate: Date = new Date();
  applications: any;
  selectedApplication: any;
  // der text als Attribut in eine Object reinmachen, wo auch die application und weitere paramter festgehalten sind
  text?: String;
  speicherort: MenuItem[];
  home!: MenuItem;

  constructor(private router: Router, private applicationService: ApplicationService) {
    this.speicherort=[];
  }

  ngOnInit(): void {
    this.query=history.state;
    this.queryString = this.query?.query;
    // console.log("queryString: " + this.queryString);
    if (this.queryString != null) {
      this.showLabel = true;
      this.text = '<h1>' + this.queryString + '</h1>';
    } else {
      this.text ='<h1><span style="color: rgb(187, 187, 187);">Seitentitel</h1>';
    }
    this.applications = this.applicationService.getApplications();

    this.speicherort = [
      {label: 'applications'},
      {label: 'nemos3000'}
    ];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }



  main() {
    this.router.navigateByUrl("main");
  }

  ngDoCheck(): void {
    // wird bei jeder Aenderung im Input Feld des Editors verwendet
  }

  clickedSpeicherOrt(event: any) {

    // console.log("speicherort: " + event.item.label);
  }
}
