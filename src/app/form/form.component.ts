import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    num1: number =0;
    num2: number =0;
    resul: number =0;

    onSoma(){
      this.resul = this.num1 + this.num2;
    }

    onMenos(){
      this.resul = this.num1 - this.num2;
    }

    onDivi(){
      this.resul = this.num1 / this.num2;
    }

    onMult(){
      this.resul = this.num1 * this.num2;
    }

}
