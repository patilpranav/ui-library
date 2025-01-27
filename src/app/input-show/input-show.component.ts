import { Component } from '@angular/core';

@Component({
  selector: 'app-input-show',
  imports: [],
  templateUrl: './input-show.component.html',
  styleUrl: './input-show.component.scss'
})
export class InputShowComponent {
  inputArray = [{
    type:'text',
    placeholder: 'Type Something Here',
    formControlName: 'userName'
  }]
}
