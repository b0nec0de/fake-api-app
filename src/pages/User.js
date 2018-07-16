import React from 'react';

function User(props) {
	return (
		<div>
			{	props.userData &&
				props.userData.map(user =>
					<div key={user.id} className="post">
						<div className="post__name">
							<span className="post__name_header">Name:</span>
							{user.name}
						</div>
						<div className="post__title">
							<span className="post__title_header">Email:</span>
							{user.email}
						</div>
						<div className="post__body">
							<span className="post__body_header">Website:</span>
							{user.website}
						</div>
					</div>
				)}
		</div>
	);
};

export default User;
