import {ChangeDetectionStrategy, Component} from '@angular/core';
import {InfoComponent} from '@cards/info/info';

@Component({
  selector: 'page-board-games',
  imports: [
    InfoComponent
  ],
  templateUrl: './board-games.html',
  styleUrl: './board-games.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardGames {

}
