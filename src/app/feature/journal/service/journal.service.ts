import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JournalEntry} from '../JournalEntry';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  journalEntries: any = [];

  constructor(private http: HttpClient) {
    this.getJournalEntries();
  }

  private getJournalEntries() {
    this.http.get("assets/journalEntries.json").subscribe(data =>{
      // console.log("getJournalEntries.data: " +data);
      this.journalEntries = data;
    })
  }

  getResults(query: string) {
    // console.log("journal.service.getResults().query: " + query);
    // console.log("journal.service.getResults().journalEntries: " + this.journalEntries);
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: string[] = [];
    // @ts-ignore
    for (let i = 0; i < this.journalEntries.length; i++) {
      // @ts-ignore
      let journalEntry = this.journalEntries[i];
      // console.log("journalEntry.titel: " + journalEntry.titel.toLowerCase());
      if (journalEntry.titel.toLowerCase().includes(query.toLowerCase())) {
        // console.log("Found entry: " +journalEntry.titel)
        filtered.push(journalEntry);
      }
    }
    // console.log("journal.service.getResults.filtered: " + filtered.length);
    return filtered;
  }
}
