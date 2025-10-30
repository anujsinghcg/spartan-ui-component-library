import { Component } from '@angular/core';

@Component({
  selector: 'lib-spartan-ui-component-lib',
  imports: [],
  template: `
    <!-- Example using Spartan design system classes -->
    <div class="card-spartan">
      <button class="btn-spartan-primary mb-4">Primary Button</button>
      <button class="btn-spartan-secondary mr-2">Secondary</button>
      <button class="btn-spartan-outline">Outline</button>
      
      <div class="mt-4">
        <input type="text" class="input-spartan w-full" placeholder="Spartan Input">
      </div>
    </div>
  `,
  styleUrls: ['../styles.css']
})
export class SpartanUiComponentLibComponent {

}
