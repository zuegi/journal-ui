import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {MainlookupService} from './mainlookup.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  selectedResult?: string;
  results: string[] = [];
  searchQuery?: string;

  constructor(private router: Router, private lookupService: MainlookupService) { }

  ngOnInit(): void {
  }

  createJournalEntry() {
    this.router.navigateByUrl("/journal/new", {state: {query: this.searchQuery}})
  }

  search({event}: { event: any }) {
    this.results = this.lookupService.getResults(event.query);
  }

  onSearchQuery(query: string) {
    this.searchQuery = query;
    console.log("MainComponent.searchQueery: " + this.searchQuery);
  }
}
