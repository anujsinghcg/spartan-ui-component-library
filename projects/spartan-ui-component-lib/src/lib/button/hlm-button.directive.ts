
import { Directive } from '@angular/core';

@Directive({
  selector: '[hlmButton]',
  standalone: true
})
export class HlmButton {
  constructor() {
    console.log('HlmButton directive initialized');
  }
}

