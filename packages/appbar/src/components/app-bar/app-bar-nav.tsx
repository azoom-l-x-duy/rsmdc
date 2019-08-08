import { Component, Element, Prop, State, Host, h } from '@stencil/core'
import { RSRipple } from '@rsmdc/ripple'

@Component({
  tag: 'rs-app-bar-nav',
  styleUrl: '../../dist/result.css',
  shadow: true
})
export class AppBar {

  @Element() el: HTMLElement

  @Prop() first: string

  @Prop() middle: string

  @Prop() last: string

  @State() top: string

  componentDidLoad() {
    const navEl = this.el.shadowRoot.querySelector('.rs-app-bar-nav')
    const ripple = new RSRipple(navEl)
    ripple.unbounded = true

    // TODO (If host component has other classname, disappear this component when properties changes)
    const observer = new MutationObserver(records => {
      records.forEach(record => {
        if (record.attributeName === 'class' && !this.el.classList.contains('hydrated')) {
          this.el.classList.add('hydrated')
        }
        if (record.attributeName === 'class' && !this.el.classList.contains('rs-app-bar-nav-host')) {
          this.el.classList.add('rs-app-bar-nav-host')
        }
      })
    })
    observer.observe(this.el, {
      attributes: true
    })
  }

  render() {
    return  <Host class="host-rs-app-bar-nav">
              <span class="rs-app-bar-nav" tabindex="0">
                <span class="label">
                  <slot />
                </span>
              </span>
            </Host>
  }
}
