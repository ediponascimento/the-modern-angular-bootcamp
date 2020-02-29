import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generator-password';
  password = '';

  handleClick() {
    this.password = 'MY PASSWORD!!!';
  }

  getPassword() {
    return this.password;
  }
}
