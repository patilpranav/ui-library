import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui-library';
  navItems = [{title: 'Button', route:'/button'}, {title: 'Input', route:'/input'},] 

  onclick(event: Event) {
    console.log(event);
  }
}
