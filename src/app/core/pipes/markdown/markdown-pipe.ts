import {Pipe, PipeTransform} from '@angular/core';
import MarkdownIt from 'markdown-it';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  private readonly markdown = new MarkdownIt();

  transform(value: string | undefined | null): string {
    return value ? this.markdown.render(value) : '';
  }
}
