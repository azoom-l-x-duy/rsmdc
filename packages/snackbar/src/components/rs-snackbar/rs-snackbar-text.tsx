import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'rs-snackbar-text',
  styleUrl: "../../dist/result.css",
  shadow: true
})
export class snackbarTitle {
  render() {
    return  <Host>
              <div class="rs-snackbar-title"
                role="status"
                aria-live="polite">
                  <slot />
              </div>
            </Host>
  }
}
