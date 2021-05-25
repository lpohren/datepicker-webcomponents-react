import { DatePicker as WBDatePicker } from '@ui5/webcomponents-react/dist/DatePicker';

const DatePicker = (props) => {
  return (
    <WBDatePicker 
      style={props.style}
      onChange={props.onChange}
      value={props.value}
      formatPattern={props.formatPattern}
      placeholder={props.placeholder}
    />
  )
}

export { DatePicker };
//# sourceMappingURL=DatePicker.js.map


