import { Routes } from '@angular/router';
import { ButtonShowComponent } from '../app/button/button.component';
import { InputShowComponent } from './input-show/input-show.component';

export const routes: Routes = [
    {path:'button', component: ButtonShowComponent},
    {path:'input', component: InputShowComponent}
];
