import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
   standalone: true
})
export class TooltipDirective implements OnDestroy {
  @Input('appTooltip') tooltipText: string = '';
  private tooltipElement: HTMLElement | null = null;
@Input() hlmTooltipTrigger: string = '';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

 ngOnInit() {
    this.el.nativeElement.setAttribute('title', this.hlmTooltipTrigger);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.tooltipText) return;

    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.setProperty(this.tooltipElement, 'innerText', this.tooltipText);
    this.renderer.addClass(this.tooltipElement, 'tooltip');

    // Basic styling
    this.renderer.setStyle(this.tooltipElement, 'position', 'fixed');
    this.renderer.setStyle(this.tooltipElement, 'background', '#1D4ED8');
    this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'padding', '6px 10px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '4px');
    this.renderer.setStyle(this.tooltipElement, 'font-size', '12px');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');

    const rect = this.el.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.tooltipElement, 'top', `${rect.top - 30}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${rect.left}px`);

    this.renderer.appendChild(document.body, this.tooltipElement);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.removeTooltip();
  }

  ngOnDestroy(): void {
    this.removeTooltip();
  }

  private removeTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
