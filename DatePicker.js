import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import '@ui5/webcomponents/dist/DatePicker';

/**
 * The `DatePicker` component provides an input field with assigned calendar which opens on user action. The `DatePicker` allows users to select a localized date using touch, mouse, or keyboard input. It consists of two parts: the date input field and the date picker.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/DatePicker" target="_blank">UI5 Web Components Playground</ui5-link>
 */
var DatePicker = withWebComponent('ui5-date-picker', ['name', 'placeholder', 'value', 'valueState', 'formatPattern', 'maxDate', 'minDate', 'primaryCalendarType'], ['disabled', 'hideWeekNumbers', 'readonly', 'required'], ['valueStateMessage'], ['change', 'input']);
DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = {
  disabled: false,
  hideWeekNumbers: false,
  placeholder: undefined,
  readonly: false,
  required: false,
  valueState: ValueState.None
};

export { DatePicker };
//# sourceMappingURL=DatePicker.js.map
