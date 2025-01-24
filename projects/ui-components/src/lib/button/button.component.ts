import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfiguration!: any;

  ngOnInit(): void {
    this.buttonConfiguration;
  }
}
