import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainlookupService {

  countries?: any[];

  constructor(private http: HttpClient) {
    this.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  getCountries(): Promise<any> {
    return this.http.get<any>('assets/countries.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }

  getResults(query: string) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: string[] = [];
    // let query = event.query;
    // @ts-ignore
    for (let i = 0; i < this.countries.length; i++) {
      // @ts-ignore
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country as string);
      }
    }

    return filtered;
  }
}
