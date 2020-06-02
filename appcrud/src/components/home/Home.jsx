import React, { Component } from 'react';
import { Table } from 'evergreen-ui';
import FormBar from '../templates/FormBar';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idSelected: '?',
			usernameSelected: '',
			data: [],
		};
		this.setData = this.setData.bind(this);
		this.getData = this.getData.bind(this);
		this.selectId = this.selectId.bind(this);
		this.clearSelectionItem = this.clearSelectionItem.bind(this);
		this.generateList = this.generateList.bind(this);
		this.getData("");
	}
	setData(data) {
		this.setState({ data });
	}
	/**
	 * @description Return data of database from router /home port 3333
	 * @function getData
	 * @param {*} value 
	 * @memberof Home
	 */
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
				return console.log('reuslt:', result);
			});

		console.log('data:\n', this.state.data[0]);
	}
	selectId(idSelected, usernameSelected) {
		this.setState({ idSelected, usernameSelected });
	}
	clearSelectionItem() {
		this.setState({ idSelected: '?' });
	}
	generateList(){
		return (

			<Table.Body>
				{this.state.data.map( userdata => {
					return (
						<Table.Row key={userdata.id} isSelectable onSelect={() => alert(userdata.username)}>
							<Table.TextCell>{userdata.username}</Table.TextCell>
							<Table.TextCell>{userdata.password}</Table.TextCell>
						</Table.Row>
					);
				})}

			</Table.Body>
		)
	};
	render() {
		return (
			<React.Fragment>
				<FormBar idSelected={'1'} usernameSelected={'icaro'} />

				<Table>
					<Table.SearchHeaderCell marginBottom={10} onChange={value => this.getData(value)} />
					<Table.Head>
						<Table.TextHeaderCell>
							Username
    					</Table.TextHeaderCell>
						<Table.TextHeaderCell>
							Password
    					</Table.TextHeaderCell>
					</Table.Head>
					<Table.Body>
					{this.generateList()}
					</Table.Body>
				</Table>
			</React.Fragment>
		);
	}
}

export default Home;