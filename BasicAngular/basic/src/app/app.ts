import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonsModule],
  //templateUrl: './app.html',
  template: '
  <main class="main">
    <h1>{{ title }}<h1>

    <input [(ngModel)]="name" />
    <p>Hello, {{ name }}!</p>

    <button [disable]="isButtonDisable" (click)="handleClick()">Click here</button>

    <router-outlet></router-outlet>
  </main>',
  styleUrl: './app.css'
})

export class App {
  isButtonDisable = false;
  //protected readonly title = signal('basic');
  protected readonly title = 'Hello Aaron';
  name= 'Aaron';

  handleClick() {
    console.log('Button clicked');
  }

}
