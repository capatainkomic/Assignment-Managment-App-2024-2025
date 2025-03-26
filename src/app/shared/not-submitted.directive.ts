import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNotSubmitted]'
})
export class NotSubmittedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.border = '1px solid lightgray';
    el.nativeElement.style.color = '#ff0000';
    el.nativeElement.style.padding = '10px 15px';
    el.nativeElement.style.borderRadius= '5px';


    //el.nativeElement.innerHTML += "TOTOTOTOTO"; // you can also change the inner DOM of the component
  }

}
