import {DomSanitizer} from "@angular/platform-browser";
import {Pipe} from "@angular/core";

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe {
  private domSanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer) {
    this.domSanitizer = sanitizer;
  }

  transform(html: any) {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
