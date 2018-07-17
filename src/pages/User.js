import React from 'react';

function User(props) {

	return (
		<div>
			{props.userData &&
				props.userData.map(item =>
					<div key={item.id} className="post">
						<div className="post__name">
							<span className="post__name_header">Name:</span>
							{item.name}
						</div>
						<div className="post__title">
							<span className="post__title_header">Email:</span>
							{item.email}
						</div>
						<div className="post__body">
							<span className="post__body_header">Website:</span>
							{item.website}
						</div>
					</div>
				)
			}
		</div>
	);
};

export default User;
