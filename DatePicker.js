import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/DatePicker';

/**
 * The <code>DatePicker</code> component provides an input field with assigned calendar which opens on user action. The
 <code>DatePicker</code> allows users to select a localized date using touch, mouse, or keyboard input. It consists of
 two parts: the date input field and the date picker.

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/DatePicker" target="_blank">UI5 Web Components Playground</a>
 */
var DatePicker = withWebComponent('ui5-date-picker', ['formatPattern', 'maxDate', 'minDate', 'name', 'placeholder', 'primaryCalendarType', 'value', 'valueState'], ['disabled', 'hideWeekNumbers', 'readonly', 'required'], ['valueStateMessage'], ['change', 'input']);
DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = {
  disabled: false,
  hideWeekNumbers: false,
  placeholder: undefined,
  primaryCalendarType: CalendarType.Gregorian,
  readonly: false,
  required: false,
  valueState: ValueState.None
};

export { DatePicker };
//# sourceMappingURL=DatePicker.js.map
