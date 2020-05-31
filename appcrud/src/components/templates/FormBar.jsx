import React, { Component } from 'react';
import { Pane, Button } from 'evergreen-ui';
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
        this.setId = this.setId.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.postForm = this.postForm.bind(this);
    }
    setId(id) {
        this.setState({ id });
    }
    setUsername(username) {
        this.setState({ username });
    }
    setPassword(password) {
        this.setState({ password });
    }
    postForm() {
        const urlencoded = new URLSearchParams();
        urlencoded.append("username", this.state.username);
        urlencoded.append("password", this.state.password);
        urlencoded.append("id", this.state.id);

        const requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:3333/insert", requestOptions)
            .then(response => response.text())
            .then(result => console.log('result:',result))
            .catch(error => console.log('error', error));
        
    }
    render() {
        return (
            <Pane
                height={120}
                display="flex"
                alignItems="center"
                justifyContent="start"
                border="default"
                margin="20px"
            >
                <IdPill callbackGetText={this.setId} />
                <UsernameField callbackGetText={this.setUsername} />
                <PasswordField callbackGetText={this.setPassword} />

                <Button marginLeft={16} appearance="primary" intent="success" onClick={this.postForm}>Insert / Update</Button>
            </Pane>
        );
    }
}
export default FormBar;