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
    soma: number =0;
    subt: number =0;

    onClick(){
      this.soma = this.num1 + this.num2;
    }

    onMenos(){
      this.subt = this.num1 - this.num2;
    }

}
