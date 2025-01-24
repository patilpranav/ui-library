import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'ui-components';


@Component({
  selector: 'app-button',
  imports: [ButtonComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonShowComponent implements OnInit {
  buttonArray = [
    {
    type:'Primary',
    text: 'Click Me',
    customStyle: '',
    icon: ''
  },
  {
    type:'Secondary',
    text: 'Click Me',
    customStyle: '',
    disabled: false,
    icon: ''
  },
  {
    type:'Teritiary',
    text: 'Click Me',
    customStyle: '',
    icon: ''
  },
  {
    type:'Primary',
    text: 'Click Me',
    customStyle: {'background-color': 'green', 'color': 'yellow', 'border-radius': '20px'},
    icon: ''
  },
]


  ngOnInit(): void {
    
  }

  onclick(event:Event) {

  }
}
