import React from 'react';
import {Table} from 'evergreen-ui';
import FormBar from '../templates/FormBar';

export default () => (
	<React.Fragment>
	<FormBar />
	
		<Table>
			<Table.Head>
				<Table.SearchHeaderCell />
				<Table.TextHeaderCell>
					Last Activity
    </Table.TextHeaderCell>
				<Table.TextHeaderCell>
					ltv
    </Table.TextHeaderCell>
			</Table.Head>
			<Table.Body>
					<Table.Row key={'1'} isSelectable onSelect={() => alert('profile.name')}>
						<Table.TextCell>{'profile.name'}</Table.TextCell>
						<Table.TextCell>{'profile.lastActivity'}</Table.TextCell>
						<Table.TextCell isNumber>
							{'profile.ltv'}
						</Table.TextCell>
					</Table.Row>
			</Table.Body>
		</Table>
	</React.Fragment>
);