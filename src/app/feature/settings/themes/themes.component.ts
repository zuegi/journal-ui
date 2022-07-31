import { Component, OnInit } from '@angular/core';
import {ThemeService} from './theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  constructor(private themeService:ThemeService) { }

  ngOnInit(): void {
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);

  }
}
