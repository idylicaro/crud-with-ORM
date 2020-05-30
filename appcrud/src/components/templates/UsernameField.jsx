import React, { Component } from 'react';
import { TextInputField } from 'evergreen-ui';

class UsernameField extends Component {
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
                marginLeft={16}
                marginRight={16}
                label="Username"
                placeholder="ex:user123"
                required
                onChange={this.handleChange}
            />
        );
    }
}
export default UsernameField;