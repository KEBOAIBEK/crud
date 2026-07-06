import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Countries } from './countries/countries';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Countries],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crud';
}
