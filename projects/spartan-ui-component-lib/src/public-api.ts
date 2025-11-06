/*
 * Public API Surface of spartan-ui-component-lib
 */

// Component exports
export * from './lib/spartan-ui-component-lib.service';
export * from './lib/spartan-ui-component-lib.component';
export * from './lib/tooltip/tooltip.directive';
export * from './lib/tooltip/tooltip-directives.module';


// Re-export the path to the Tailwind preset for consuming applications
export const SPARTAN_TAILWIND_PRESET = 'node_modules/@spartan-ng/ui/tailwind-preset.cjs';
