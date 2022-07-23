import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Application} from '../application/application';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {
  text?: string;
  formGroup = this.formBuilder.group({
    titel: ['', [Validators.maxLength(100)]],
    beschreibung: ['', [Validators.maxLength(1000)]],
    selectedApplication: ['', Validators.required],
    datum: ['', [Validators.required]]
  });

  applications: Application[];
  selectedApplication?: Application;


  constructor(private formBuilder: FormBuilder) {
    this.applications = [
      {uid: 'nemos-0', name: 'Nemos3000'},
      {uid: 'cm-service-1', name: 'CMService'},
      {uid: 'zinsalert-2', name: 'Zinsalert'},
    ];
  }

  upper() {
    this.text = this.text?.toUpperCase();
  }
}
