import { Component, h, State, Prop, Listen, Element } from '@stencil/core';

@Component({
  tag: 'custom-dropdown',
  styleUrl: 'custom-dropdown.css',
  shadow: true,
})
export class CustomDropdown {
  @State() isOpen: boolean = false;
  @State() selectedOption: string | null = null;
  @State() filteredOptions: Element[] = [];
  @State() highlightIndex: number = 0;
  @Element() el!: HTMLElement;

  @Prop() debounceTime: number = 300; // filtering debounce

  private filterInput: ReturnType<typeof setTimeout> | undefined;
  private allOptions: Element[] = [];

  componentDidLoad() {
    this.allOptions = Array.from(this.el.querySelectorAll('custom-option'));
    this.filteredOptions = this.allOptions;
  }

  @Listen('keydown', { target: 'window' })
  handleKeydown(ev: KeyboardEvent) {
    if (this.isOpen) {
      switch (ev.key) {
        case 'ArrowDown':
          ev.preventDefault();
          this.navigateOptions(1);
          break;
        case 'ArrowUp':
          ev.preventDefault();
          this.navigateOptions(-1);
          break;
        case 'Enter':
          ev.preventDefault();
          this.selectOption();
          break;
        case 'Escape':
          this.isOpen = false;
          break;
      }
    } else if (ev.key === 'Enter') {
      this.toggleDropdown();
    }
  }

  @Listen('click', { target: 'window' })
  handleClickOutside(ev: MouseEvent) {
    if (!this.el.contains(ev.target as Node)) {
      this.isOpen = false;
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      const filterInput = this.el.shadowRoot?.querySelector('.dropdown-filter') as HTMLInputElement;
      if (filterInput) {
        filterInput.focus();
      }
    }
  }

  navigateOptions(step: number) {
    this.highlightIndex = (this.highlightIndex + step + this.filteredOptions.length) % this.filteredOptions.length;
    this.ensureOptionVisible(this.highlightIndex);
  }

  ensureOptionVisible(index: number) {
    const optionElement = this.filteredOptions[index] as HTMLElement;
    if (optionElement) {
      optionElement.scrollIntoView({ block: 'nearest' });
    }
  }

  selectOption() {
    const selectedOption = this.filteredOptions[this.highlightIndex];
    if (selectedOption) {
      this.selectedOption = selectedOption.getAttribute('value');
      this.isOpen = false;
    }
  }

  handleOptionClick(value: string) {
    this.selectedOption = value;
    this.isOpen = false;
  }

  handleFilterChange(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    clearTimeout(this.filterInput);

    this.filterInput = setTimeout(() => {
      this.filteredOptions = this.allOptions.filter(option =>
        option.getAttribute('value')?.toLowerCase().includes(input)
      );
      this.highlightIndex = 0; 
    }, this.debounceTime);
  }

  render() {
    return (
      <div class="dropdown-container">
        <div
          class="dropdown-trigger"
          tabIndex={0}
          onClick={() => this.toggleDropdown()}
        >
          {this.selectedOption || 'Select an option'}
        </div>

        {this.isOpen && (
          <div class="dropdown-menu" role="listbox" aria-expanded="true">
            <input
              type="text"
              class="dropdown-filter"
              onInput={event => this.handleFilterChange(event)}
              placeholder="Filter options..."
              aria-label="Filter options"
            />
            <div class="options-container">
              {this.filteredOptions.map((option, index) => (
                <div
                  role="option"
                  tabIndex={0}
                  aria-selected={this.selectedOption === option.getAttribute('value') ? 'true' : 'false'}
                  class={index === this.highlightIndex ? 'highlighted' : ''}
                  onClick={() => this.handleOptionClick(option.getAttribute('value') || '')}
                >
                  {option.getAttribute('value')}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
