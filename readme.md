
# CustomDropdown Component

A reusable dropdown component built using Stencil.js. This component supports filtering options, keyboard navigation, and option selection.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
- [Events](#events)
- [Styling](#styling)
- [Keyboard Navigation](#keyboard-navigation)

## Installation

To use the `CustomDropdown` in your project, install it via npm:

```bash
npm install custom-dropdown
```

## Usage

You can use the `CustomDropdown` component in your HTML or a framework like React, Angular, or Vue.

### Basic Example

```html
<custom-dropdown>
  <custom-option value="Option 1"></custom-option>
  <custom-option value="Option 2"></custom-option>
  <custom-option value="Option 3"></custom-option>
</custom-dropdown>
```

### Filtering Example

```html
<custom-dropdown>
  <custom-option value="Apple"></custom-option>
  <custom-option value="Banana"></custom-option>
  <custom-option value="Cherry"></custom-option>
</custom-dropdown>
```

## Properties

| Property     | Type   | Default | Description                                  |
|--------------|--------|---------|----------------------------------------------|
| `debounceTime` | `number` | `300`   | The debounce time (in ms) for filtering options. |

### Example with Debounce Time

```html
<custom-dropdown debounce-time="500">
  <custom-option value="Option 1"></custom-option>
  <custom-option value="Option 2"></custom-option>
</custom-dropdown>
```

## Events

The `CustomDropdown` component emits the following events:

| Event            | Description                                     |
|------------------|-------------------------------------------------|
| `selectOption`    | Fired when an option is selected.               |
| `filterChange`    | Fired when the filter input value is changed.   |

### Event Usage Example

```html
<custom-dropdown id="dropdown">
  <custom-option value="Option 1"></custom-option>
  <custom-option value="Option 2"></custom-option>
</custom-dropdown>

<script>
  const dropdown = document.getElementById('dropdown');
  dropdown.addEventListener('selectOption', (event) => {
    console.log('Selected option:', event.detail);
  });
</script>
```

## Styling

You can customize the appearance of the `CustomDropdown` component using CSS. The component exposes the following CSS classes:

| Class Name          | Description                                   |
|---------------------|-----------------------------------------------|
| `.dropdown-container` | The outermost container of the dropdown.     |
| `.dropdown-trigger`   | The element that triggers the dropdown open/close. |
| `.dropdown-menu`      | The container for the dropdown options.      |
| `.dropdown-filter`    | The input field used for filtering options.  |
| `.highlighted`        | The class applied to the currently highlighted option. |

### Example CSS

```css
custom-dropdown .dropdown-trigger {
  background-color: #007bff;
  color: white;
  padding: 8px;
  border-radius: 4px;
}

custom-dropdown .dropdown-menu {
  border: 1px solid #ddd;
  background-color: #fff;
}

custom-dropdown .highlighted {
  background-color: #f0f0f0;
}
```

## Keyboard Navigation

The `CustomDropdown` supports keyboard navigation for a more accessible user experience:

- `ArrowDown` and `ArrowUp`: Navigate through the options.
- `Enter`: Select the currently highlighted option.
- `Escape`: Close the dropdown.

## Example with Keyboard Navigation

```html
<custom-dropdown>
  <custom-option value="Option A"></custom-option>
  <custom-option value="Option B"></custom-option>
</custom-dropdown>
```

Simply use the `Tab`, `ArrowUp`, `ArrowDown`, and `Enter` keys to navigate and select options.

---

This `CustomDropdown` component provides flexibility with filtering, keyboard navigation, and easy styling for any application. Customize it as needed, and enjoy the benefits of reusable, scalable dropdown functionality!
```

### Key Sections Included:
- **Installation**: Instructions for adding the component to a project.
- **Usage**: Examples of basic usage, including filtering.
- **Properties**: Available properties like `debounceTime`.
- **Events**: Describes events like `selectOption` and `filterChange` that the component emits.
- **Styling**: Guidance on styling the component using CSS.
- **Keyboard Navigation**: Explanation of keyboard interactions.
