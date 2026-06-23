import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'card-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  title = input.required<string>();
  tags = input<string[]>([]);
}
