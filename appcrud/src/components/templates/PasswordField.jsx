import React, { Component } from 'react';
import { TextInputField } from 'evergreen-ui';

class PasswordField extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.callbackGetText(event.target.value);
      }
    render() {
        return (
            <TextInputField
                label="Password"
                placeholder="ex:user123@//"
                required
                type="password"
                onChange={this.handleChange}
            />
        );
    }
}
export default PasswordField;