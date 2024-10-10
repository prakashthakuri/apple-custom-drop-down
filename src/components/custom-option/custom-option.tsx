import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-option',
  shadow: true,
})
export class CustomOption {
  @Prop() value: string;

  render() {
    return <div role="option" tabIndex={0}>{this.value}</div>;
  }
}