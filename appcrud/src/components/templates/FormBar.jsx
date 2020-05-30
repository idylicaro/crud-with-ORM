import React, { Component } from 'react';
import {Pane,Button} from 'evergreen-ui';
import IdPill from './IdPill';
import UsernameField from './UsernameField';
import PasswordField from './PasswordField';

class FormBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: '?',
          username: '',
          password: '',
        };
        this.setId  = this.setId.bind(this);
        this.setUsername  = this.setUsername.bind(this);
        this.setPassword  = this.setPassword.bind(this);
    }
    setId(id){
        this.setState({id});
    }
    setUsername(username){
        this.setState({username});
    }
    setPassword(password){
        this.setState({password});
    }
    render(){
        return(
        <Pane
        height={120}
        display="flex"
            alignItems="center"
            justifyContent="start"
            border="default"
            margin="20px"
        >
        <IdPill callbackGetText={this.setId}/>
        <UsernameField callbackGetText={this.setUsername}/>
        <PasswordField callbackGetText={this.setPassword}/>
        
        <Button marginLeft={16} appearance="primary" intent="success">Insert / Update</Button>
        </Pane>
        );
    }
}
export default FormBar;