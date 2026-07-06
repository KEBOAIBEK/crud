import { HttpClient } from '@angular/common/http';
import { LowerCasePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-countries',
  imports: [LowerCasePipe, ReactiveFormsModule],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Countries implements OnInit {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  countries = signal<any[]>([]);
  isModalOpen = signal(false);

  form = this.fb.group({
    code: this.fb.control('', [Validators.required]),
    country: this.fb.control('', [Validators.required]),
    description: this.fb.control(''),
  });

  ngOnInit(): void {
    this.http
      .get<any[]>('https://6a3a0ce7917c7b14c74c9ee6.mockapi.io/Country')
      .subscribe((country) => {
        this.countries.set(country);
      });
  }

  submit() {
    const model = this.form.getRawValue();
    this.http
      .post('https://6a3a0ce7917c7b14c74c9ee6.mockapi.io/Country', model)
      .subscribe({
        next: (response) => {
          if (response) {
            this.countries.update((list) => [response, ...list]);
            this.closeModal();
            this.form.reset();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
