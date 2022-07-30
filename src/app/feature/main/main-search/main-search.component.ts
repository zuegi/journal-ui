import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MainlookupService} from '../mainlookup.service';
import {Router} from '@angular/router';

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

  selectedResult?: string;
  results: string[] = [];

  constructor(private lookupService:MainlookupService, private router: Router) { }

  ngOnInit(): void {
  }

  search({event}: { event: any }) {
    this.results = this.lookupService.getResults(event.query);
  }

  // FIXME Country ersetzen durch Suchresultat
  onSelect(country: Country) {
    console.log("country: " + country.name);
    // passing data to route
    this.router.navigateByUrl('journal', {state: {code:country.code, name:country.name}})
  }
}
