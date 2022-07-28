import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MainlookupService} from '../mainlookup.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainSearchComponent implements OnInit {

  selectedResult?: string;
  results: string[] = [];

  constructor(private lookupService:MainlookupService) { }

  ngOnInit(): void {
  }

  search({event}: { event: any }) {
    this.results = this.lookupService.getResults(event.query);
  }
}
