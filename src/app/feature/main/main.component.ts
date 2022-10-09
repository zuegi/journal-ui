import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {JournalService} from '../journal/service/journal.service';

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

  constructor(private router: Router,
              private journalService: JournalService) { }

  ngOnInit(): void {
  }

  createJournalEntry() {
    this.router.navigateByUrl("/journal/new", {state: {query: this.searchQuery}})
  }

  search({event}: { event: any }) {
    // console.log("main.component.search.event.query: " + event.query);
    this.results = this.journalService.getResults(event.query);
  }

  onSearchQuery(query: string) {
    this.searchQuery = query;
  }
}
