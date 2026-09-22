import {inject, Pipe, PipeTransform} from '@angular/core';
import MarkdownIt from 'markdown-it';

import {abbr} from '@mdit/plugin-abbr';
import {alert} from '@mdit/plugin-alert';
import {align} from '@mdit/plugin-align';
import {dl} from '@mdit/plugin-dl';
import {footnote} from '@mdit/plugin-footnote';
import {icon} from '@mdit/plugin-icon';
import {imgLazyload} from '@mdit/plugin-img-lazyload';
import {plantuml} from '@mdit/plugin-plantuml';
import {tab} from '@mdit/plugin-tab';
import {tasklist} from '@mdit/plugin-tasklist';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  private readonly sanitizer = inject(DomSanitizer);

  private readonly markdown = new MarkdownIt({html: false})
    .use(abbr)
    .use(alert)
    .use(align)
    .use(dl)
    .use(footnote)
    .use(icon)
    .use(imgLazyload)
    .use(plantuml, {type: 'fence', fence: 'puml'})
    .use(tab, {name: 'tabs'})
    .use(tasklist);

  transform(value: string | undefined | null): SafeHtml {
    const html = value ? this.markdown.render(value) : '';
    console.log(html);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
