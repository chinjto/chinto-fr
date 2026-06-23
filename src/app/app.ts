import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Navbar} from '@sections/navbar/navbar';
import {Footer} from '@sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'chinto-fr';
}
