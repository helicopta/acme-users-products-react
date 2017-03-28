import React from 'react';

const UserListItem = ({user})=>(
	<li className = 'list-group-item' key = {user.id}> 
		{user.name}
	</li>
);
const UserList = ({users})=>(
	<ul className = 'list-group'>
		{users.map(user => <UserListItem key = {user.id} user={user}/>)}
	</ul>
);

export default UserList;