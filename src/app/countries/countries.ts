import { HttpClient } from '@angular/common/http';
import { LowerCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-countries',
  imports: [LowerCasePipe],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Countries implements OnInit {
  private http = inject(HttpClient);

  countries = signal<any[]>([]);

  ngOnInit(): void {
    this.http
      .get<any[]>('https://6a3a0ce7917c7b14c74c9ee6.mockapi.io/Country')
      .subscribe((country) => {
        this.countries.set(country);
      });
  }

  create() {
    const model = {};
    this.http
      .post('https://6a3a0ce7917c7b14c74c9ee6.mockapi.io/Country', model)
      .subscribe();
  }
}
