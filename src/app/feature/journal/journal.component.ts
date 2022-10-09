import { Component, OnInit } from '@angular/core';
import {JournalEntry} from './JournalEntry';

interface Country {
  name:string,
  code:string
}

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  product?: JournalEntry;

  constructor() {
  }

  ngOnInit(): void {
    this.product=history.state;
  }

}
