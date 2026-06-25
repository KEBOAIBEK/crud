import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  imports: [],
  template: `<p>countries works!</p>`,
  styleUrl: './countries.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Countries {}
