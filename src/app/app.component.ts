import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeaderComponent]
})
export class AppComponent {
  inputTest:string = "test 1";
  title = 'sf-redeem';
}
