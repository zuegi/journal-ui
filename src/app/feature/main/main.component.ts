import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MainlookupService} from './mainlookup.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  selectedResult?: string;
  results: string[] = [];

  constructor(private router: Router, private lookupService: MainlookupService) { }

  ngOnInit(): void {
  }

  createJournalEntry() {
    this.router.navigateByUrl("/application/new")
  }

  search({event}: { event: any }) {
    console.log('search: event.query: ' +event.query);
    this.results = this.lookupService.getResults(event.query);
  }
}
