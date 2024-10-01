import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appItemBorderColor]',
  standalone: true,
})
export default class ColoredBorderDirective implements OnInit {
  @Input('appItemBorderColor') colored!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setBorderColor();
  }

  private setBorderColor() {
    const currentDate = new Date();
    const publicationDate = new Date(this.colored);
    const timeDiff = currentDate.getTime() - publicationDate.getTime();
    const dayDiff = timeDiff / (1000 * 3600 * 24);
    let borderColor = 'transparent';
    if (dayDiff > 180) {
      borderColor = 'red';
    } else if (dayDiff > 30) {
      borderColor = 'yellow';
    } else if (dayDiff > 7) {
      borderColor = 'green';
    } else {
      borderColor = 'blue';
    }

    this.el.nativeElement.style.borderBottom = `5px solid ${borderColor}`;
  }
}
