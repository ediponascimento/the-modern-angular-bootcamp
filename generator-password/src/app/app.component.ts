import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  title = 'generator-password';
  password = '';

  onCgangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    const numbers = '1234567890';
    const lettes = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%*()_+"';
    
    let validChar = '';

    if (this.includeLetters) {
      validChar += lettes;
    }

    if (this.includeNumbers) {
      validChar = numbers;
    }

    if (this.includeSymbols) {
      validChar += symbols;
    }

    let generetedPassword = '';
    for (let i =0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChar.length);
      generetedPassword += validChar[index];
    }
    this.password = generetedPassword;
  }
}
