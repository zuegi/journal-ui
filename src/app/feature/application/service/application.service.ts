import { Injectable } from '@angular/core';
import {Application} from '../application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  // to be replaced
  applications: Application[] = [
    {uid: '126', name: 'Nemos3000'},
    {uid: '216', name: 'CMService'},
    {uid: '167', name: 'Zinsalert'},
  ];

  constructor() { }

  getApplications(): Application[] {
    return this.applications;
  }

}
