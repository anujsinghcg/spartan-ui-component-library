import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from '../../../spartan-ui-component-lib/src/lib/tooltip/tooltip.component';

@NgModule({
 imports: [CommonModule,TooltipComponent],
 exports: [TooltipComponent]
})
export class SpartanUiLibModule {}