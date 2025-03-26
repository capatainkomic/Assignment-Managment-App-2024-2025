import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSubmitted]'
})
export class SubmittedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.border = '1px solid lightgray';
    el.nativeElement.style.color = '#33db00';
    el.nativeElement.style.padding = '10px 15px';
    el.nativeElement.style.borderRadius= '5px';
  }

}
