import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MainlookupService} from '../mainlookup.service';
import {Router} from '@angular/router';
import {JournalService} from '../../journal/service/journal.service';

// FIXME Country ersetzen durch Suchresultat
interface Country {
  name:string,
  code:string
}

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainSearchComponent implements OnInit {

  @Output() searchQuery = new EventEmitter<string>();
  selectedResult?: string;
  results: string[] = [];
  query?: string;

  constructor(private lookupService:MainlookupService,
              private journalService: JournalService, private router: Router) { }

  ngOnInit(): void {
  }

  search({event}: { event: any }) {
    // this.results = this.lookupService.getResults(event.query);
    // console.log("event.query: " + event.query);
    this.results = this.journalService.getResults(event.query);
    // console.log("results: " + this.results.toString());
    this.query = event.query;
    this.searchQuery.emit(event.query);
  }

  // FIXME Country ersetzen durch Suchresultat
  onSelect(country: Country) {
    // passing data to route
    this.router.navigateByUrl('journal', {state: {code:country.code, name:country.name}})
  }

  onKeyUp(event: any) {
    // keyCode 13 = enter
    if (event.keyCode == 13) {
      this.router.navigateByUrl("/journal/new", {state: {query: this.query}})
    }
  }

  settings() {
    this.router.navigateByUrl('settings');
  }
}
