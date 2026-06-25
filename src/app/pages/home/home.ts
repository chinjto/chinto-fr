import {Component} from '@angular/core';
import {InfoComponent} from '@cards/info/info';

@Component({
  selector: 'app-home',
  imports: [
    InfoComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
