import { Component, Input } from '@angular/core';
// import { HlmButton } from '@spartan-ng/helm/button';
// import { HlmTooltipTrigger } from '@spartan-ng/helm/tooltip';

//import { HlmButton } from '../button/hlm-button.directive';
import { HlmTooltipTrigger } from '../tooltip/hlm-tooltip-trigger.directive';
import { HlmButtonImports } from '@spartan-ng/helm/button';


@Component({
	selector: 'app-tooltip',
  standalone: true,
	imports: [HlmTooltipTrigger,HlmButtonImports],
	template: `
	
 <button [hlmTooltipTrigger]="message" >
      <ng-content>
      </ng-content>
    </button>

	`,
})
export class TooltipComponent {
  @Input() message: string = '';
}