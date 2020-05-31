import React, { Component } from 'react';
import { Table } from 'evergreen-ui';
import FormBar from '../templates/FormBar';
import { render } from '@testing-library/react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idSelected:  '?',
			usernameSelected:'',
			data:'',
		};
		this.setData = this.setData.bind(this);
		this.getData = this.getData.bind(this);
		this.selectId = this.selectId.bind(this);
		this.clearSelectionItem = this.clearSelectionItem.bind(this);
	}
	setData(data){
		this.setState({data});
	}
	getData(value) {
		const urlencoded = new URLSearchParams();
        urlencoded.append("username", value);
        urlencoded.append("id", this.state.idSelected);

        const requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:3333/home", requestOptions)
            .then(response => response.json())
			.then(result => {
				this.setData(result);
				return console.log('reuslt:',result);
			});
			
		  console.log('data:\n',this.state.data[0]);
	}
	selectId(idSelected,usernameSelected){
		this.setState({idSelected,usernameSelected});
	}
	clearSelectionItem(){
		this.setState({idSelected:'?'});
	}
	render() {
		return (
			<React.Fragment>
				<FormBar idSelected={'1'} usernameSelected={'icaro'} />

				<Table>
				<Table.SearchHeaderCell marginBottom={10} onChange={ value => this.getData(value) }/>
					<Table.Head>
						<Table.TextHeaderCell>
							Username
    					</Table.TextHeaderCell>
						<Table.TextHeaderCell>
							Password
    					</Table.TextHeaderCell>
					</Table.Head>
					<Table.Body>
						<Table.Row key={'1'} isSelectable onSelect={() => alert('profile.name')}>
							<Table.TextCell>{'profile.name'}</Table.TextCell>
							<Table.TextCell>{'profile.ltv'}</Table.TextCell>
						</Table.Row>
					</Table.Body>
				</Table>
			</React.Fragment>
		);
	}
}

export default Home;