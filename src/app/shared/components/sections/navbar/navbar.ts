import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Navigation} from '@core/navigation/navigation';

@Component({
  selector: 'app-navbar',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  constructor(
    public navigation: Navigation
  ) { }

}
