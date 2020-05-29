import React from 'react';
import {Pane,TextInputField,Button,Pill} from 'evergreen-ui';
 
export default () => (
		<Pane
            height={120}
            display="flex"
            alignItems="center"
            justifyContent="start"
            border="default"
            margin="20px"
        >
        <Pill display="inline-flex" margin={8}>id</Pill>
        <TextInputField
        marginLeft={16}
        marginRight={16}
        label="Username"
        placeholder="ex:user123"
        required
        />
        <TextInputField
        label="Password"
        placeholder="ex:user123@//"
        required
        type="password"
        />
        <Button marginLeft={16} appearance="primary" intent="success">Insert / Update</Button>
        </Pane>
);