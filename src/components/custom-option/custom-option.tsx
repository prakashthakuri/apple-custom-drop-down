import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-option',
  styleUrl: 'custom-option.css',
  shadow: true,
})
export class CustomOption {
  @Prop() value: string;

  render() {
    return (
      <div role="option" tabIndex={0} aria-selected="false">
        {this.value}
      </div>
    );
  }
}
