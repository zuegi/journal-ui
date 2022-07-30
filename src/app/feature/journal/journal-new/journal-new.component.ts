import { Component, OnInit } from '@angular/core';

export interface Query {
  query: string;
}

@Component({
  selector: 'app-journal-new',
  templateUrl: './journal-new.component.html',
  styleUrls: ['./journal-new.component.scss']
})
export class JournalNewComponent implements OnInit {

  query?: Query;

  constructor() { }

  ngOnInit(): void {
    this.query=history.state;
  }

}
