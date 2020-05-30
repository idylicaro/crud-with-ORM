import React, { Component } from 'react';
import { Pill } from 'evergreen-ui';

class IdPill extends Component {
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
            <Pill display="inline-flex" margin={8}>id</Pill>
        );
    }
}
export default IdPill;