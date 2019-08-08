import { Component, Element, Prop, State, Host, h } from '@stencil/core';

@Component({
  tag: 'rs-app-bar-title',
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
    // TODO (If host component has other classname, disappear this component when properties changes)
    const observer = new MutationObserver(records => {
      records.forEach(record => {
        if (record.attributeName === 'class' && !this.el.classList.contains('hydrated')) {
          this.el.classList.add('hydrated')
        }
        if (record.attributeName === 'class' && !this.el.classList.contains('rs-app-bar-title-host')) {
          this.el.classList.add('rs-app-bar-title-host')
        }
      })
    })
    observer.observe(this.el, {
      attributes: true
    })
  }
  
  render() {
    return  <Host class="rs-app-bar-title-host">
              <h1 class="rs-app-bar-title">
                <slot />
              </h1>
            </Host>
  }
}
