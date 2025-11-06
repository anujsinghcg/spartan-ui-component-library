
import {
  Directive,
  Input,
  ElementRef,
  ViewContainerRef,
  ComponentRef,
  OnDestroy
} from '@angular/core';
import {
  Overlay,
  OverlayRef,
  OverlayPositionBuilder
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';

@Component({
  selector: 'hlm-tooltip-content',
  standalone: true,
  template: `<div style="background-color: #2d3748; color: white; padding: 0.5rem; border-radius: 0.25rem;" class="bg-gray-800 text-white text-sm rounded px-2 py-1 shadow-lg">{{ text }}</div>`
})
export class HlmTooltipContent {
  text: string = '';
}

@Directive({
  selector: '[hlmTooltipTrigger]',
  standalone: true
})
export class HlmTooltipTrigger implements OnDestroy {
  @Input() hlmTooltipTrigger: string = '';

  private overlayRef: OverlayRef | null = null;

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private positionBuilder: OverlayPositionBuilder,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit() {
    const positionStrategy = this.positionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8
        }
      ]);

    this.overlayRef = this.overlay.create({ positionStrategy });

    this.elementRef.nativeElement.addEventListener('mouseenter', () => {
      const tooltipPortal = new ComponentPortal(HlmTooltipContent, this.vcr);
      const tooltipRef: ComponentRef<HlmTooltipContent> = this.overlayRef!.attach(tooltipPortal);
      tooltipRef.instance.text = this.hlmTooltipTrigger;
    });

    this.elementRef.nativeElement.addEventListener('mouseleave', () => {
      this.overlayRef?.detach();
    });
  }

  ngOnDestroy() {
    this.overlayRef?.dispose();
  }
}
